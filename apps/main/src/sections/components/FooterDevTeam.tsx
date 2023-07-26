import { useIntl } from 'react-intl'

export const FooterDevTeam = () => {
  const { formatMessage } = useIntl()
  // <AiFillHeart className="mx-1" color="red" size={18} />
  return (
    <div className='flex flex-wrap items-center justify-center pb-2 text-center text-sm text-gray-300'>
      {formatMessage({ id: 'FOOTER_MADE_WITH' })}
      <a
        target='_blank'
        rel='noreferrer'
        className='mx-1 text-orange-400'
        href='https://www.linkedin.com/in/victoriacabello/'
      >
        Veke
      </a>
      (Design) &
      <a
        target='_blank'
        rel='noreferrer'
        className='mx-1 text-orange-400'
        href='https://www.linkedin.com/in/rsvila/'
      >
        Rodri
      </a>
      (Development).
    </div>
  )
}
