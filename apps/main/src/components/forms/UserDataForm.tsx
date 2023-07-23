import { ChangeEvent, useState } from 'react';
import { useIntl } from 'react-intl';

import { Button } from '@packages/button';
import { Input } from '@packages/input';

import { useAppActions, useAppSelector } from '~hooks';
import { UserDetailsType } from '~types';

type UserDataFormType = {
  isCheckoutForm?: boolean;
  onChange?: (userDetails: UserDetailsType | any) => void;
};

export const UserDataForm = ({ isCheckoutForm, onChange }: UserDataFormType) => {
  const { areUsersLoading, userDetails } = useAppSelector();
  const [userData, setUserData] = useState<UserDetailsType>(userDetails);

  const { formatMessage } = useIntl();

  const { editUserDetails } = useAppActions();

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

  return (
    <div className="w-full p-6 overflow-scroll">
      <Input
        label={formatMessage({ id: 'NAME' })}
        type="text"
        name="name"
        onChange={handleChange}
      />
      <Input
        label={formatMessage({ id: 'LASTNAME' })}
        type="text"
        name="lastName"
        onChange={handleChange}
      />
      <Input
        label={formatMessage({ id: 'EMAIL' })}
        type="text"
        name="email"
        onChange={handleChange}
        disabled={!isCheckoutForm}
      />
      <Input
        label={formatMessage({ id: 'MOBILE_NUMBER' })}
        type="text"
        name="mobileNo"
        onChange={handleChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_STREET' })}
        type="text"
        name="street"
        onChange={handleAddressChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_STREET_NUMBER' })}
        type="text"
        name="streetNumber"
        onChange={handleAddressChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_EXTRAS' })}
        type="text"
        name="extras"
        placeholder="Piso, puerta, etc"
        onChange={handleAddressChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_POSTCODE' })}
        type="text"
        name="postCode"
        onChange={handleAddressChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_CITY' })}
        type="text"
        name="city"
        onChange={handleAddressChange}
      />
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
      {!isCheckoutForm && (
        <Button onClick={handleSubmit} disabled={areUsersLoading}>
          {formatMessage({ id: 'CHANGE_USER_DATA' })}
        </Button>
      )}
    </div>
  );
};
