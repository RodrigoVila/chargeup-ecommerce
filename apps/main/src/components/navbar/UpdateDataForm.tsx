import { Button } from '@packages/button'
import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { UserDataForm } from '~components/forms'
import { APP_USER_INITIAL_STATE } from '~constants/initialState'
import { useAppActions, useAppSelector } from '~hooks'
import { UserDetailsType } from '@packages/types'

export const UpdateDataForm = () => {
  const [userData, setUserData] = useState<UserDetailsType>(APP_USER_INITIAL_STATE)

  const { isUserDataLoading, userDetails } = useAppSelector()
  const { editUserDetails, getUserDetails } = useAppActions()

  const { formatMessage } = useIntl()

  const handleSave = () => editUserDetails(userData)

  useEffect(() => {
    getUserDetails()
  }, [])

  useEffect(() => {
    userDetails?.address && setUserData(userDetails)
  }, [userDetails])

  return (
    <>
      <UserDataForm userData={userData} setUserData={setUserData} />
      <Button onClick={handleSave} disabled={isUserDataLoading} className='px-4'>
        {formatMessage({ id: 'CHANGE_USER_DATA' })}
      </Button>
    </>
  )
}
