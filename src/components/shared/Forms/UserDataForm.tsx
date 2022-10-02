import { useState, useEffect, ChangeEvent, FC } from 'react';

import { APP_USER_INITIAL_STATE, colors, lang } from '@constants';
import Input from '@shared/Input';
import Button from '@main/Buttons/Button';
import useAppSelector from '@hooks/useAppSelector';
import Link from '@main/Link';
import useAppActions from '@hooks/useAppActions';

const UserDataForm: FC = () => {
  const { user } = useAppSelector();
  const [userDetails, setUserDetails] = useState(user);

  const { closeUserModal } = useAppActions();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((currDetails) => ({ ...currDetails, [name]: value }));
  };

  const {
    name,
    lastName,
    email,
    mobileNo,
    prefixNo,
    prefContact: [],
    location,
  } = userDetails;

  useEffect(() => {
    console.log('userDetails', userDetails);
  }, [userDetails]);

  return (
    <div className="rounded-xl border-2 border-black p-6">
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
        onChange={handleChange}
      />
      <Input
        label={lang.es.LOCATION_STREET_NUMBER}
        type="text"
        name="streetNumber"
        value={location.streetNumber}
        onChange={handleChange}
      />
      <Input
        label={lang.es.LOCATION_POSTCODE}
        type="text"
        name="postCode"
        value={location.postCode}
        onChange={handleChange}
      />
      <Input
        label={lang.es.LOCATION_CITY}
        type="text"
        name="city"
        value={location.city}
        onChange={handleChange}
      />
      <Input
        label={lang.es.LOCATION_PROVINCE}
        type="text"
        name="province"
        value={location.province}
        onChange={handleChange}
      />
      <Input
        label={lang.es.LOCATION_COUNTRY}
        type="text"
        name="country"
        value={location.country}
        onChange={handleChange}
      />
      <Input
        label={lang.es.LOCATION_EXTRAS}
        type="text"
        name="extras"
        value={location.extras}
        onChange={handleChange}
      />
      <Button title={lang.es.CHANGE_USER_DATA} color={colors.purple} onClick={() => {}} />
      <Link text={lang.es.GO_BACK} onClick={closeUserModal} />
    </div>
  );
};

export default UserDataForm;
