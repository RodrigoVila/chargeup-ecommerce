import { ChangeEvent, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { Button } from '@packages/button';
import { Input } from '@packages/input';

import { useAppActions, useAppSelector } from '~hooks';
import { AddressType, UserDetailsType } from '~types';
import { getValueFromLocalStorage } from '~utils/localStorage';
import { LOCAL_STORAGE_DATA_KEY } from '~constants/keys';

type UserDataFormType = {
  isCheckoutForm?: boolean;
  onChange?: (userDetails: UserDetailsType | any) => void;
};

const address: AddressType = {
  street: '',
  streetNumber: '',
  extras: '',
  postCode: '',
  city: '',
};

export const UserDataForm = ({ isCheckoutForm, onChange }: UserDataFormType) => {
  const { isUserLoading, userDetails } = useAppSelector();
  // TODO: Find a better way to do this
  const data = userDetails.address ? userDetails : { ...userDetails, address };
  const [userData, setUserData] = useState<UserDetailsType>(data);

  const { formatMessage } = useIntl();

  const { editUserDetails } = useAppActions();

  const storedUser = getValueFromLocalStorage(LOCAL_STORAGE_DATA_KEY);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevDetails) => ({ ...prevDetails, [name]: value }));
    isCheckoutForm &&
      onChange &&
      onChange((prevDetails: UserDetailsType) => ({ ...prevDetails, [name]: value }));
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevDetails) => ({
      ...prevDetails,
      address: { ...prevDetails.address, [name]: value },
    }));
    isCheckoutForm &&
      onChange &&
      onChange((prevDetails: UserDetailsType) => ({
        ...prevDetails,
        address: { ...prevDetails.address, [name]: value },
      }));
  };

  const handleSubmit = () => editUserDetails(userData);

  useEffect(() => {
    console.log({ userData });
    // getUserDetails();
  }, []);

  return (
    <div className="w-full p-6 overflow-scroll">
      <Input
        label={formatMessage({ id: 'NAME' })}
        type="text"
        name="name"
        value={userData.name || ''}
        onChange={handleChange}
      />
      <Input
        label={formatMessage({ id: 'LASTNAME' })}
        type="text"
        name="lastName"
        value={userData.lastName || ''}
        onChange={handleChange}
      />
      <Input
        label={formatMessage({ id: 'EMAIL' })}
        type="text"
        name="email"
        value={userData.email || storedUser?.email || ''}
        onChange={handleChange}
        disabled={!isCheckoutForm}
      />
      <Input
        label={formatMessage({ id: 'MOBILE_NUMBER' })}
        type="text"
        name="mobileNo"
        value={userData.mobileNo || ''}
        onChange={handleChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_STREET' })}
        type="text"
        name="street"
        value={userData.address.street || ''}
        onChange={handleAddressChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_STREET_NUMBER' })}
        type="text"
        name="streetNumber"
        value={userData.address.streetNumber || ''}
        onChange={handleAddressChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_EXTRAS' })}
        type="text"
        name="extras"
        placeholder="Piso, puerta, etc"
        value={userData.address.extras || ''}
        onChange={handleAddressChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_POSTCODE' })}
        type="text"
        name="postCode"
        value={userData.address.postCode || ''}
        onChange={handleAddressChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_CITY' })}
        type="text"
        name="city"
        value={userData.address.city || ''}
        onChange={handleAddressChange}
      />
      {isCheckoutForm ? (
        <>
          <Input
            label={formatMessage({ id: 'ADDRESS_PROVINCE' })}
            type="text"
            name="province"
            value={'Barcelona'}
            onChange={handleAddressChange}
            disabled
          />
          <Input
            label={formatMessage({ id: 'ADDRESS_COUNTRY' })}
            type="text"
            name="country"
            value={'España'}
            onChange={handleAddressChange}
            disabled
          />
        </>
      ) : (
        <Button onClick={handleSubmit} disabled={isUserLoading}>
          {formatMessage({ id: 'CHANGE_USER_DATA' })}
        </Button>
      )}
    </div>
  );
};
