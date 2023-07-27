import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import { Modal } from '~features/modal'

export const DeliveryAreasMap = () => {
  const [isExpanded, setExpanded] = useState(false)

  const { formatMessage } = useIntl()

  useEffect(() => {
    if (!isExpanded) document.body.style.overflow = 'hidden'
  }, [isExpanded])

  return (
    <>
      <div className='relative flex items-center justify-center w-full h-64 font-bold bg-green-400'>
        <div
          className='flex h-full w-full cursor-pointer items-center justify-center hover:bg-[rgba(0,0,0,0.3)]'
          onClick={() => setExpanded(true)}
        >
          {formatMessage({ id: 'EXPAND_MAP' })}
        </div>
      </div>
      <Modal isOpen={isExpanded} onClose={() => setExpanded(false)} fullScreen>
        <div className='flex items-center justify-center w-full h-full font-bold bg-green-400 2xl:h-full'>
          Mapa Grande
        </div>
      </Modal>
    </>
  )
}
