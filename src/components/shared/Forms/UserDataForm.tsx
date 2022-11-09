import { useState, useEffect, ChangeEvent, FC } from 'react';

import { APP_USER_INITIAL_STATE, colors, lang } from '@constants';
import Input from '@shared/Input';
import Button from '@main/Buttons/Button';
import useAppSelector from '@hooks/useAppSelector';
import Link from '@main/Link';
import useAppActions from '@hooks/useAppActions';
import CloseModalButton from '@main/Buttons/CloseModalButton';

const UserDataForm: FC = () => {
  const { isUserDataLoading, user } = useAppSelector();
  const [userDetails, setUserDetails] = useState(user);
  const {
    name,
    lastName,
    email,
    mobileNo,
    prefixNo,
    prefContact: [],
    location,
  } = userDetails;

  const { closeUserModal, editUserDetails } = useAppActions();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, location: { ...prevDetails.location, [name]: value } }));
  };

  const handleSubmit = () => editUserDetails(userDetails);

  useEffect(() => {
    console.log('userDetails', userDetails);
  }, [userDetails]);

  useEffect(() => {
    console.log('isUserDataLoading', isUserDataLoading);
  }, [isUserDataLoading]);

  return (
    <div className="relative w-full p-6 overflow-scroll bg-white rounded-md">
      <CloseModalButton color="black" isAbsolute position="right" onClose={closeUserModal} />
      <Input label={lang.es.NAME} type="text" name="name" value={name} onChange={handleChange} />
      <Input
        label={lang.es.LASTNAME}
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleChange}
      />
      <Input
        label={lang.es.EMAIL}
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
        disabled={true}
      />
      <Input
        label={lang.es.PREFIX_NUMBER}
        type="text"
        name="prefixNo"
        value={prefixNo}
        onChange={handleChange}
      />
      <Input
        label={lang.es.MOBILE_NUMBER}
        type="text"
        name="mobileNo"
        value={mobileNo}
        onChange={handleChange}
      />
      <Input
        label={lang.es.LOCATION_STREET}
        type="text"
        name="street"
        value={location.street}
        onChange={handleLocationChange}
      />
      <Input
        label={lang.es.LOCATION_STREET_NUMBER}
        type="text"
        name="streetNumber"
        value={location.streetNumber}
        onChange={handleLocationChange}
      />
      <Input
        label={lang.es.LOCATION_POSTCODE}
        type="text"
        name="postCode"
        value={location.postCode}
        onChange={handleLocationChange}
      />
      <Input
        label={lang.es.LOCATION_EXTRAS}
        type="text"
        name="extras"
        placeholder="Piso, puerta, etc"
        value={location.extras}
        onChange={handleLocationChange}
      />
      <Input
        label={lang.es.LOCATION_CITY}
        type="text"
        name="city"
        value={location.city}
        onChange={handleLocationChange}
      />
      <Input
        label={lang.es.LOCATION_PROVINCE}
        type="text"
        name="province"
        value={location.province}
        onChange={handleLocationChange}
      />
      <Input
        label={lang.es.LOCATION_COUNTRY}
        type="text"
        name="country"
        value={location.country}
        onChange={handleLocationChange}
      />
      <Button
        title={lang.es.CHANGE_USER_DATA}
        color={colors.purple}
        onClick={handleSubmit}
        disabled={isUserDataLoading}
      />
    </div>
  );
};

export default UserDataForm;
