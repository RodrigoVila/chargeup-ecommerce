import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import { Modal } from '@packages/modal'

export const DeliveryAreasMap = () => {
  const [isExpanded, setExpanded] = useState(false)

  const { formatMessage } = useIntl()

  useEffect(() => {
    if (!isExpanded) document.body.style.overflow = 'hidden'
  }, [isExpanded])

  return (
    <>
      <div className='relative flex h-64 w-full items-center justify-center bg-green-400 font-bold'>
        <div
          className='flex h-full w-full cursor-pointer items-center justify-center hover:bg-[rgba(0,0,0,0.3)]'
          onClick={() => setExpanded(true)}
        >
          {formatMessage({ id: 'EXPAND_MAP' })}
        </div>
      </div>
      <Modal isOpen={isExpanded} onClose={() => setExpanded(false)} fullScreen>
        <div className='flex h-full w-full items-center justify-center bg-green-400 font-bold 2xl:h-full'>
          Mapa Grande
        </div>
      </Modal>
    </>
  )
}
