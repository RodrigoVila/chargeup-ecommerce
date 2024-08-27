import { ReactNode, useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useAppActions, useAppSelector } from '~hooks'
import { Modal } from '@packages/modal'
import { DeliveryType, OrderType, UserDetailsType } from '@packages/types'

import { DeliveryOptions } from './components'
import { DeliveryDataForm } from './components/DeliveryDataForm'

type StepsType = {
  [currentStep: number]: ReactNode
}

export const CartModal = () => {
  const [loading, setLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [deliveryType, setDeliveryType] = useState<DeliveryType | null>(null)

  const { isCartModalOpen, cartItems, userLogin } = useAppSelector()
  const { closeCartModal, createCheckoutSession } = useAppActions()

  const totalSum = useMemo(() => cartItems.reduce((acc, item) => acc + item.total!, 0), [cartItems])

  const nextStep = () => setCurrentStep((curr) => curr + 1)
  const backStep = () => setCurrentStep((curr) => curr - 1)

  const onSubmit = async (userData?: UserDetailsType) => {
    setLoading(true)
    const newOrder: OrderType = {
      id: uuidv4(),
      name: userData?.name || userLogin?.name,
      email: userData?.email || userLogin?.email,
      deliveryType,
      address: userData?.address,
      items: cartItems,
      totalAmount: totalSum.toFixed(2),
      created: new Date(),
    }

    createCheckoutSession(newOrder)
  }

  const Steps: StepsType = {
    1: <></>,
    // 1: <CartSummary products={cartItems} total={totalSum} next={nextStep} />,
    2: (
      <DeliveryOptions
        deliveryType={deliveryType}
        setDeliveryType={setDeliveryType}
        loading={loading}
        disabled={!deliveryType}
        next={nextStep}
        back={backStep}
        onSubmit={onSubmit}
      />
    ),
    3: <DeliveryDataForm loading={loading} onSubmit={onSubmit} />,
  }

  useEffect(() => {
    if (isCartModalOpen) {
      setLoading(false)
    } else {
      setCurrentStep(1)
    }
  }, [isCartModalOpen])

  useEffect(() => {
    cartItems.length === 0 ? closeCartModal() : null
  }, [cartItems])

  return (
    <Modal isOpen={isCartModalOpen} onClose={closeCartModal}>
      {Steps[currentStep]}
    </Modal>
  )
}
