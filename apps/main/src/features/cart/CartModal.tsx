import { ChangeEvent, ReactNode, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppActions, useAppSelector } from '~hooks';
import { Modal } from '~features/modal';
import { UserDataForm } from '~components/forms';
import { DeliveryType, OrderType, UserDetailsType } from '~types';

import { CartSummary, DeliveryOptions, CartModalButtons } from './components';

type StepsType = {
  [currentStep: number]: {
    component: ReactNode;
    buttons: ReactNode;
  };
};

export const CartModal = () => {
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [deliveryType, setDeliveryType] = useState<DeliveryType>('Pick UP');
  const [hasUserAcceptedToSaveDetails, setHasUserAcceptedToSaveDetails] = useState(false);
  const [userData, setUserData] = useState<UserDetailsType | null>(null);

  const { isCartModalOpen, cartItems, userLogin, userDetails } = useAppSelector();
  const { closeCartModal, createCheckoutSession, editUserDetails, openLoginModal } =
    useAppActions();

  const totalSum = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.total!, 0),
    [cartItems]
  );

  const nextStep = () => setCurrentStep((curr) => curr + 1);
  const backStep = () => setCurrentStep((curr) => curr - 1);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setHasUserAcceptedToSaveDetails(e.target.checked);
  };

  const onUserDataChange = (userDetails: UserDetailsType) => setUserData(userDetails);

  const onSubmit = async () => {
    setLoading(true);

    const name = userLogin?.name || userData?.name;
    const email = userLogin?.email || userData?.email;
    const address = userData?.address;

    const newOrder: OrderType = {
      id: uuidv4(),
      name,
      email,
      deliveryType,
      address,
      status: 'pending',
      items: cartItems,
      totalAmount: totalSum.toFixed(2),
      created: new Date(),
    };

    hasUserAcceptedToSaveDetails &&
      userLogin?.email &&
      editUserDetails(userData as UserDetailsType);

    createCheckoutSession(newOrder);
  };

  const isEveryInputComplete = useMemo(
    () =>
      userData?.name &&
      userData?.lastName &&
      userData?.email &&
      userData?.address &&
      !!userData?.mobileNo,
    [userData]
  );

  
  const hasRegisteredAddress = userDetails?.address?.street !== undefined;
  const isLoggedInWithNoAddress = userLogin?.token && !hasRegisteredAddress;

  const Steps: StepsType = {
    1: {
      component: <CartSummary products={cartItems} total={totalSum} />,
      buttons: <CartModalButtons next={nextStep} />,
    },
    2: {
      component: <DeliveryOptions value={deliveryType} setValue={setDeliveryType} />,
      buttons:
        deliveryType === 'Delivery' ? (
          <CartModalButtons next={nextStep} back={backStep} disabled={!deliveryType} />
        ) : (
          <CartModalButtons
            back={backStep}
            submit={onSubmit}
            loading={loading}
            disabled={!deliveryType}
          />
        ),
    },
    3: {
      component: (
        <>
          <UserDataForm isCheckoutForm onChange={onUserDataChange} />
          {isLoggedInWithNoAddress ? (
              // User is logged in but doesn't have an address, ask to save details
              <div className="flex items-center gap-2 mt-2">
                <input type="checkbox" onChange={handleCheck} />
                <p>Guardar mis datos para futuras compras.</p>
              </div>
            ) : !hasRegisteredAddress ? (
              // Otherwise, user is not logged in, ask to log in
              <p className="font-bold text-md">
                Nota: Puedes{' '}
                <span onClick={openLoginModal} className="text-blue-400 cursor-pointer text-bold">
                  iniciar sesión
                </span>{' '}
                para guardar tus datos y no volver a escribirlos la próxima vez!
              </p>
            ) : null /* User has a registered address, do nothing */
          }
        </>
      ),
      buttons: (
        <CartModalButtons
          back={backStep}
          submit={onSubmit}
          loading={loading}
          disabled={!isEveryInputComplete}
        />
      ),
    },
  };

  useEffect(() => {
    if (isCartModalOpen) {
      setLoading(false);
    } else {
      setCurrentStep(1);
    }
  }, [isCartModalOpen]);

  useEffect(() => {
    cartItems.length === 0 ? closeCartModal() : null;
  }, [cartItems]);

  return (
    <Modal isOpen={isCartModalOpen} onClose={closeCartModal}>
      {Steps[currentStep].component}
      {Steps[currentStep].buttons}
    </Modal>
  );
};
