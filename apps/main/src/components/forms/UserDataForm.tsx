import { ChangeEvent } from 'react'
import { useIntl } from 'react-intl'

import { Input } from '@packages/input'

import { StorageUserType, UserDetailsType } from '@packages/types'
import { getValueFromLocalStorage } from '~utils/localStorage'
import { LOCAL_STORAGE_DATA_KEY } from '~constants/keys'

type UserDataFormType = {
  isCheckoutForm?: boolean
  userData: UserDetailsType
  setUserData: React.Dispatch<React.SetStateAction<UserDetailsType>>
}

export const UserDataForm = ({ isCheckoutForm, userData, setUserData }: UserDataFormType) => {
  const { formatMessage } = useIntl()

  const storedUser: StorageUserType = getValueFromLocalStorage(LOCAL_STORAGE_DATA_KEY)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData((prevDetails) => ({ ...prevDetails, [name]: value }))
  }

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData((prevDetails) => ({
      ...prevDetails,
      address: { ...prevDetails.address, [name]: value },
    }))
  }

  return userData ? (
    <div className='w-full overflow-scroll text-black'>
      <Input
        label={formatMessage({ id: 'NAME' })}
        type='text'
        name='name'
        value={userData.name || ''}
        onChange={handleChange}
      />
      <Input
        label={formatMessage({ id: 'LASTNAME' })}
        type='text'
        name='lastName'
        value={userData.lastName || ''}
        onChange={handleChange}
      />
      <Input
        label={formatMessage({ id: 'EMAIL' })}
        type='text'
        name='email'
        value={userData.email || ''}
        onChange={handleChange}
        disabled={!!storedUser?.email || !isCheckoutForm}
      />
      <Input
        label={formatMessage({ id: 'MOBILE_NUMBER' })}
        type='text'
        name='mobileNo'
        value={userData.mobileNo || ''}
        onChange={handleChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_STREET' })}
        type='text'
        name='street'
        value={userData.address.street || ''}
        onChange={handleAddressChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_STREET_NUMBER' })}
        type='text'
        name='streetNumber'
        value={userData.address.streetNumber || ''}
        onChange={handleAddressChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_EXTRAS' })}
        type='text'
        name='extras'
        placeholder='Piso, puerta, etc'
        value={userData.address.extras || ''}
        onChange={handleAddressChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_POSTCODE' })}
        type='text'
        name='postCode'
        value={userData.address.postCode || ''}
        onChange={handleAddressChange}
      />
      <Input
        label={formatMessage({ id: 'ADDRESS_CITY' })}
        type='text'
        name='city'
        value={userData.address.city || ''}
        onChange={handleAddressChange}
      />
      {isCheckoutForm && (
        <>
          <Input
            label={formatMessage({ id: 'ADDRESS_PROVINCE' })}
            type='text'
            name='province'
            value={'Barcelona'}
            onChange={handleAddressChange}
            disabled
          />
          <Input
            label={formatMessage({ id: 'ADDRESS_COUNTRY' })}
            type='text'
            name='country'
            value={'España'}
            onChange={handleAddressChange}
            disabled
          />
        </>
      )}
    </div>
  ) : null
}
