import Link from 'next/link'
import { useIntl } from 'react-intl'

export const FooterFormalLinks = () => {
  const { formatMessage } = useIntl()

  return (
    <div className='text-md pb-4 text-center text-sm text-gray-300'>
      <Link href='/terms'> {formatMessage({ id: 'FOOTER_TERMS' })}</Link> |
      <Link href='/cookies'> {formatMessage({ id: 'FOOTER_COOKIES' })}</Link>
      <Link href='mailto:chargeupbcn@gmail.com'>{formatMessage({ id: 'FOOTER_FEEDBACK' })}</Link>
    </div>
  )
}
