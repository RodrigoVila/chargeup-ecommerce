import { useState, ChangeEvent, FC } from 'react';

import { colors, lang } from '@constants';
import Input from '@shared/Input';
import Button from '@main/Buttons/Button';

type Props = {
  userDetails: UserDetailsType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  closeEdit: () => void;
};

const UserDataForm: FC<Props> = ({ userDetails, onChange, closeEdit }) => {
  const {
    name,
    lastName,
    email,
    mobileNo,
    prefixNo,
    prefContact: [],
    location,
  } = userDetails;

  return (
    <div className="my-6 rounded-xl border-2 border-black p-6">
      <Input label={lang.es.NAME} type="text" name="name" value={name} onChange={onChange} />
      <Input
        label={lang.es.LASTNAME}
        type="text"
        name="lastName"
        value={lastName}
        onChange={onChange}
      />
      <Input
        label={lang.es.EMAIL}
        type="text"
        name="email"
        value={email}
        onChange={() => {}}
        disabled={true}
      />
      <Input
        label={lang.es.PREFIX_NUMBER}
        type="text"
        name="prefixNo"
        value={prefixNo}
        onChange={onChange}
      />
      <Input
        label={lang.es.MOBILE_NUMBER}
        type="text"
        name="mobileNo"
        value={mobileNo}
        onChange={onChange}
      />
      <Input
        label={lang.es.LOCATION_STREET}
        type="text"
        name="street"
        value={location.street}
        onChange={onChange}
      />
      <Input
        label={lang.es.LOCATION_STREET_NUMBER}
        type="text"
        name="streetNumber"
        value={location.streetNumber}
        onChange={onChange}
      />
      <Input
        label={lang.es.LOCATION_POSTCODE}
        type="text"
        name="postCode"
        value={location.postCode}
        onChange={onChange}
      />
      <Input
        label={lang.es.LOCATION_CITY}
        type="text"
        name="city"
        value={location.city}
        onChange={onChange}
      />
      <Input
        label={lang.es.LOCATION_PROVINCE}
        type="text"
        name="province"
        value={location.province}
        onChange={onChange}
      />
      <Input
        label={lang.es.LOCATION_COUNTRY}
        type="text"
        name="country"
        value={location.country}
        onChange={onChange}
      />
      <Input
        label={lang.es.LOCATION_EXTRAS}
        type="text"
        name="extras"
        value={location.extras}
        onChange={onChange}
      />
      <Button title={lang.es.CHANGE_USER_DATA} color={colors.purple} onClick={() => {}} />
      <Button title={lang.es.GO_BACK} color={colors.purple} onClick={closeEdit} />
    </div>
  );
};

export default UserDataForm;
