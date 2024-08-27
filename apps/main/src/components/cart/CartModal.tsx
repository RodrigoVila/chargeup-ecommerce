import { ReactNode, useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useAppActions, useAppSelector } from '~hooks'
import { Modal, ModalContent, ModalTrigger } from '@packages/modal'
import { DeliveryType, OrderType, UserDetailsType } from '@packages/types'

import { DeliveryOptions, DeliveryDataForm } from '~components/cart'
import { CartButton } from '~components/navbar'

type StepsType = {
  [currentStep: number]: ReactNode
}

export const CartModal = () => {
  const [isOpen, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [deliveryType, setDeliveryType] = useState<DeliveryType>('Pick UP')

  const { cartItems, userLogin } = useAppSelector()
  const { createCheckoutSession } = useAppActions()

  const totalSum = useMemo(() => cartItems.reduce((acc, item) => acc + item.total!, 0), [cartItems])

  const nextStep = () => setCurrentStep((curr) => curr + 1)
  const backStep = () => setCurrentStep((curr) => curr - 1)

  const onSubmit = async (userData?: UserDetailsType) => {
    setLoading(true)
    const newOrder: OrderType = {
      id: uuidv4(),
      name: userData?.name || userLogin?.name,
      email: userData?.email || userLogin?.email,
      deliveryType,
      address: userData?.address,
      items: cartItems,
      totalAmount: totalSum.toFixed(2),
      created: new Date(),
    }

    createCheckoutSession(newOrder)
  }

  const Steps: StepsType = {
    1: <></>,
    // 1: <CartSummary products={cartItems} total={totalSum} next={nextStep} />,
    2: (
      <DeliveryOptions
        deliveryType={deliveryType}
        setDeliveryType={setDeliveryType}
        loading={loading}
        disabled={!deliveryType}
        next={nextStep}
        back={backStep}
        onSubmit={onSubmit}
      />
    ),
    3: <DeliveryDataForm loading={loading} onSubmit={onSubmit} />,
  }

  useEffect(() => {
    if (isOpen) {
      setLoading(false)
    } else {
      setCurrentStep(1)
    }
  }, [isOpen])

  useEffect(() => {
    cartItems.length === 0 ? setOpen(false) : null
  }, [cartItems])

  return (
    <Modal open={isOpen} onOpenChange={setOpen}>
      <ModalTrigger asChild>
        <CartButton onOpen={() => setOpen(true)} />
      </ModalTrigger>
      <ModalContent>{Steps[currentStep]}</ModalContent>
    </Modal>
  )
}
