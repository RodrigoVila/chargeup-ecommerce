import { ChangeEvent, useState } from 'react';

import { lang } from '@constants/lang';
import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';
import Button from '@shared/Buttons/CustomButton';
import Input from '@shared/Input';
import { UserDetailsType } from 'types';

type UserDataFormType = {
  isCheckoutForm?: boolean;
  onChange?: (userDetails: UserDetailsType | any) => void;
};

const UserDataForm = ({ isCheckoutForm, onChange }: UserDataFormType) => {
  const { areUsersLoading, userDetails } = useAppSelector();
  const [userData, setUserData] = useState<UserDetailsType>(userDetails);
  const { name, lastName, email, mobileNo, address } = userDetails;

  const { editUserDetails } = useAppActions();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevDetails) => ({ ...prevDetails, [name]: value }));
    isCheckoutForm && onChange((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevDetails) => ({
      ...prevDetails,
      address: { ...prevDetails.address, [name]: value },
    }));
    isCheckoutForm &&
      onChange((prevDetails) => ({
        ...prevDetails,
        address: { ...prevDetails.address, [name]: value },
      }));
  };

  const handleSubmit = () => editUserDetails(userData);

  return (
    <div className="w-full p-6 overflow-scroll">
      <Input label={lang.es.NAME} type="text" name="name" onChange={handleChange} />
      <Input label={lang.es.LASTNAME} type="text" name="lastName" onChange={handleChange} />
      <Input
        label={lang.es.EMAIL}
        type="text"
        name="email"
        onChange={handleChange}
        disabled={!isCheckoutForm}
      />
      <Input label={lang.es.MOBILE_NUMBER} type="text" name="mobileNo" onChange={handleChange} />
      <Input
        label={lang.es.ADDRESS_STREET}
        type="text"
        name="street"
        onChange={handleAddressChange}
      />
      <Input
        label={lang.es.ADDRESS_STREET_NUMBER}
        type="text"
        name="streetNumber"
        onChange={handleAddressChange}
      />
      <Input
        label={lang.es.ADDRESS_EXTRAS}
        type="text"
        name="extras"
        placeholder="Piso, puerta, etc"
        onChange={handleAddressChange}
      />
      <Input
        label={lang.es.ADDRESS_POSTCODE}
        type="text"
        name="postCode"
        onChange={handleAddressChange}
      />
      <Input label={lang.es.ADDRESS_CITY} type="text" name="city" onChange={handleAddressChange} />
      <Input
        label={lang.es.ADDRESS_PROVINCE}
        type="text"
        name="province"
        value={'Barcelona'}
        onChange={handleAddressChange}
        disabled
      />
      <Input
        label={lang.es.ADDRESS_COUNTRY}
        type="text"
        name="country"
        value={'España'}
        onChange={handleAddressChange}
        disabled
      />
      {!isCheckoutForm && (
        <Button onClick={handleSubmit} disabled={areUsersLoading}>
          {lang.es.CHANGE_USER_DATA}
        </Button>
      )}
    </div>
  );
};

export default UserDataForm;
