import Link from 'next/link'
import { useIntl } from 'react-intl'

export const FooterFormalLinks = () => {
  const { formatMessage } = useIntl()

  return (
    <div className='text-md pb-4 text-center text-sm text-gray-300'>
      <a href='/terms'> {formatMessage({ id: 'FOOTER_TERMS' })}</a> |
      <a href='/cookies'> {formatMessage({ id: 'FOOTER_COOKIES' })}</a>
      <a href='mailto:chargeupbcn@gmail.com'>{formatMessage({ id: 'FOOTER_FEEDBACK' })}</a>
    </div>
  )
}
