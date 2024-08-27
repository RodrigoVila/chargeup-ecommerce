import { Button } from '@packages/button'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useIntl } from 'react-intl'

import { DeliveryAreasMap } from '~components/cart'
import { DeliveryType } from '@packages/types'

type DeliveryOptionsProps = {
  deliveryType: DeliveryType
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

  return (
    <>
      <div className='flex h-full w-full flex-col gap-4 overflow-y-auto'>
        <h3 className='text-center text-2xl'>{formatMessage({ id: 'DELIVERY_OPTIONS' })}</h3>
        <p className='text-lg'>{formatMessage({ id: 'DELIVERY_DATA_A' })}</p>
        <p className='text-lg'>{formatMessage({ id: 'DELIVERY_DATA_B' })}</p>
        <p className='text-lg'>{formatMessage({ id: 'DELIVERY_DATA_C' })}</p>
        {/*<DeliveryAreasMap />
        <p className='py-2'>{`${formatMessage({ id: 'CHOOSE_DELIVERY_MODE' })}: `}</p>
        <div className='flex w-full flex-col gap-3'>
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
        </div> */}
      </div>

      <div className='mt-4 flex w-full flex-col gap-2'>
        <Button
          className={buttonStyles}
          onClick={() => onSubmit()}
          loading={loading}
          // disabled={disabled}
        >
          {formatMessage({ id: 'GO_TO_PAY' })}
        </Button>
        {/* {deliveryType === 'Delivery' ? (
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
        )} */}
        <Button className={buttonStyles} variant='outlined' onClick={back}>
          {formatMessage({ id: 'GO_BACK' })}
        </Button>
      </div>
    </>
  )
}
