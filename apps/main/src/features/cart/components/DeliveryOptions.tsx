import { Button } from '@packages/button'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useIntl } from 'react-intl'

import { DeliveryAreasMap } from '~features/cart/components/DeliveryAreasMap'
import { DeliveryType } from '~types'

type DeliveryOptionsProps = {
  deliveryType: DeliveryType | null
  setDeliveryType: Dispatch<SetStateAction<DeliveryType>>
  loading: boolean
  disabled: boolean
  next: () => void
  back: () => void
  onSubmit: () => void
}

export const DeliveryOptions = ({
  deliveryType,
  setDeliveryType,
  loading,
  disabled,
  next,
  back,
  onSubmit,
}: DeliveryOptionsProps) => {
  const { formatMessage } = useIntl()

  const buttonStyles = 'w-full text-base'

  const handleCheck = (value: DeliveryType) => {
    setDeliveryType(value)
  }

  const handleBack = () => {
    setDeliveryType(null)
    back()
  }

  return (
    <>
      <div className='flex flex-col w-full h-full gap-4 overflow-y-auto'>
        <h3 className='text-2xl text-center'>{formatMessage({ id: 'DELIVERY_OPTIONS' })}</h3>
        <p>
        {formatMessage({ id: 'DELIVERY_DATA' })}
        </p>
        <DeliveryAreasMap />
        <p className='py-2'>{`${formatMessage({ id: 'CHOOSE_DELIVERY_MODE' })}: `}</p>
        <div className='flex flex-col w-full gap-3'>
          <div className='flex gap-2'>
            <input
              type='radio'
              id='radioOption1'
              value='Delivery'
              name='delivery'
              onChange={() => handleCheck('Delivery')}
            />
            <label
              className='font-bold'
              htmlFor='radioOption1'
              onClick={() => handleCheck('Delivery')}
            >
              {formatMessage({ id: 'ACCEPT_CHARGES' })}
            </label>
          </div>
          <div className='flex gap-2'>
            <input
              type='radio'
              id='radioOption2'
              value='Pick UP'
              name='delivery'
              onChange={() => handleCheck('Pick UP')}
            />
            <label
              className='font-bold'
              htmlFor='radioOption2'
              onClick={() => handleCheck('Pick UP')}
            >
              {formatMessage({ id: 'DELIVERY_PICK_UP' })}
            </label>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-full gap-2 mt-2'>
        {deliveryType === 'Delivery' ? (
          <Button className={buttonStyles} onClick={next}>
            {formatMessage({ id: 'NEXT' })}
          </Button>
        ) : deliveryType === 'Pick UP' ? (
          <Button
            className={buttonStyles}
            onClick={() => onSubmit()}
            loading={loading}
            disabled={disabled}
          >
            {formatMessage({ id: 'GO_TO_PAY' })}
          </Button>
        ) : (
          <Button className={buttonStyles} loading={loading} disabled>
            {formatMessage({ id: 'CHOOSE_AN_OPTION' })}
          </Button>
        )}
        <Button className={buttonStyles} type='outlined' onClick={handleBack}>
          {formatMessage({ id: 'GO_BACK' })}
        </Button>
      </div>
    </>
  )
}
