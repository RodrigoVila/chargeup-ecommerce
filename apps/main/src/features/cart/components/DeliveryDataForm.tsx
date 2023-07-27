import { Button } from '@packages/button'

import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { useIntl } from 'react-intl'

import { useAppActions, useAppSelector } from '~hooks'

import { UserDataForm } from '~components/forms'
import { APP_USER_INITIAL_STATE } from '~constants/initialState'

import { UserDetailsType } from '~types'

type DeliveryDataFormProps = {
  loading: boolean
  onSubmit: (userData: UserDetailsType) => void
}

export const DeliveryDataForm = ({ loading, onSubmit }: DeliveryDataFormProps) => {
  const [userData, setUserData] = useState<UserDetailsType>(APP_USER_INITIAL_STATE)
  // Flag to prevent data being fetched at the same moment is being sent.
  const [userDataFlag, setUserDataFlag] = useState(false)

  const { userDetails, userLogin, isUserDataLoading } = useAppSelector()
  const { editUserDetails, getUserDetails, openLoginModal, closeCartModal } = useAppActions()

  const { formatMessage } = useIntl()

  const hasRegisteredAddress = !!userDetails?.address?.street
  const isLoggedInWithNoAddress = userLogin?.token && !hasRegisteredAddress

  const areRequiredInputsComplete = useMemo(() => {
    const { address, name, lastName, email, mobileNo } = userData
    const { street, streetNumber, postCode, city } = address

    const requiredFields = [name, lastName, email, mobileNo, street, streetNumber, postCode, city]
    const allFieldsCompleted = requiredFields.every((value) => value)

    return allFieldsCompleted
  }, [userData])

  const isButtonDisabled = !areRequiredInputsComplete || isUserDataLoading

  const handleSaveData = () => {
    setUserDataFlag(true)
    editUserDetails(userData)
  }

  const handleSubmit = () => {
    onSubmit(userData)
  }

  const handleGoToLogin = () => {
    closeCartModal()
    openLoginModal()
  }

  const clearForm = () => {
    setUserData(APP_USER_INITIAL_STATE)
  }

  useEffect(() => {
    if (userLogin?.token) {
      !isUserDataLoading && !userDataFlag && getUserDetails()
    } else {
      clearForm()
    }
  }, [userLogin])

  useEffect(() => {
    userDetails?.address && setUserData(userDetails)
  }, [userDetails])

  return (
    <>
      <UserDataForm userData={userData} setUserData={setUserData} />
      {
        isLoggedInWithNoAddress ? (
          // User is logged in but doesn't have an address, ask to save details
          <div className='flex items-center w-full gap-2 py-2 border-t border-t-black'>
            <Button
              onClick={handleSaveData}
              disabled={userDataFlag || isButtonDisabled}
              loading={userDataFlag && isUserDataLoading}
              className='bg-blue-600 hover:bg-blue-500'
            >
              {formatMessage({ id: 'CART_MODAL_SAVE_DATA' })}
            </Button>
          </div>
        ) : !hasRegisteredAddress ? (
          // Otherwise, user is not logged in, ask to log in
          <p className='py-2 font-bold border-t text-md border-t-black'>
            {formatMessage({ id: 'CART_MODAL_NOTE' })}
            <span onClick={handleGoToLogin} className='text-blue-400 cursor-pointer text-bold'>
              {` ${formatMessage({ id: 'LOGIN_2' })} `}
            </span>
            {formatMessage({ id: 'CART_MODAL_NOTE_2' })}
          </p>
        ) : null /* User has a registered address, do nothing */
      }
      <Button
        className='w-full text-base'
        onClick={handleSubmit}
        loading={loading}
        disabled={isButtonDisabled}
      >
        Ir a Pagar
      </Button>
    </>
  )
}
