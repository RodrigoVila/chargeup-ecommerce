import { useState, ChangeEvent, FC } from 'react';

import { lang } from '@constants/lang';
import Input from '@shared/Input';
import Button from '@shared/Buttons/CustomButton';
import useAppSelector from '@hooks/useAppSelector';
import useAppActions from '@hooks/useAppActions';
import CloseModalButton from '@shared/Buttons/CloseModalButton';

const UserDataForm: FC = () => {
  const { areUsersLoading, userDetails: user } = useAppSelector();
  const [editingField, setEditingField] = useState('');
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
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      location: { ...prevDetails.location, [name]: value },
    }));
  };

  const handleSubmit = () => {
    setEditingField('');
    editUserDetails(userDetails);
  };

  return (
    <div className="relative w-full p-6 overflow-scroll bg-white rounded-md">
      <CloseModalButton color="black" className="absolute right-2 top-2" onClose={closeUserModal} />
      <Input
        label={lang.es.NAME}
        type="text"
        name="name"
        value={name}
        disabled={editingField !== 'name'}
        onChange={handleChange}
        setEditingField={setEditingField}
      />
      <Input
        label={lang.es.LASTNAME}
        type="text"
        name="lastName"
        value={lastName}
        disabled={editingField !== 'lastName'}
        onChange={handleChange}
        setEditingField={setEditingField}
      />
      <Input
        label={lang.es.EMAIL}
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
        disabled
      />
      <Input
        label={lang.es.MOBILE_NUMBER}
        type="text"
        name="mobileNo"
        value={mobileNo}
        disabled={editingField !== 'mobileNo'}
        onChange={handleChange}
        setEditingField={setEditingField}
      />
      <Input
        label={lang.es.LOCATION_STREET}
        type="text"
        name="street"
        value={location.street}
        disabled={editingField !== 'street'}
        onChange={handleLocationChange}
        setEditingField={setEditingField}
      />
      <Input
        label={lang.es.LOCATION_STREET_NUMBER}
        type="text"
        name="streetNumber"
        value={location.streetNumber}
        disabled={editingField !== 'streetNumber'}
        onChange={handleLocationChange}
        setEditingField={setEditingField}
      />
      <Input
        label={lang.es.LOCATION_POSTCODE}
        type="text"
        name="postCode"
        value={location.postCode}
        disabled={editingField !== 'postCode'}
        onChange={handleLocationChange}
        setEditingField={setEditingField}
      />
      <Input
        label={lang.es.LOCATION_CITY}
        type="text"
        name="city"
        value={location.city}
        disabled={editingField !== 'city'}
        onChange={handleLocationChange}
        setEditingField={setEditingField}
      />
      <Input
        label={lang.es.LOCATION_EXTRAS}
        type="text"
        name="extras"
        placeholder="Piso, puerta, etc"
        value={location.extras}
        disabled={editingField !== 'extras'}
        onChange={handleLocationChange}
        setEditingField={setEditingField}
      />
      <Input
        label={lang.es.LOCATION_PROVINCE}
        type="text"
        name="province"
        value={location.province}
        disabled={editingField !== 'province'}
        onChange={handleLocationChange}
        setEditingField={setEditingField}
      />
      <Input
        label={lang.es.LOCATION_COUNTRY}
        type="text"
        name="country"
        value={location.country}
        disabled={editingField !== 'country'}
        onChange={handleLocationChange}
        setEditingField={setEditingField}
      />
      <Button onClick={handleSubmit} disabled={areUsersLoading}>
        {lang.es.CHANGE_USER_DATA}
      </Button>
    </div>
  );
};

export default UserDataForm;
