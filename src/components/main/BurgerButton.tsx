import React from 'react'
import { HiMenu } from 'react-icons/hi'

import { useAppDispatch } from '@hooks'
import { openDrawerModal } from '@redux/actionCreators'

const BurgerButton = () => {
  const dispatch = useAppDispatch()
  const openDrawer = () => dispatch(openDrawerModal())

  return (
    <div
      className="relative z-40 m-2 mr-4 h-10 w-10 md:m-4"
      onClick={openDrawer}
    >
      <HiMenu color="white" size={30} />
    </div>
  )
}

export default BurgerButton
