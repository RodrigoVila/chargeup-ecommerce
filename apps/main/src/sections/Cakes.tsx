import { useIntl } from 'react-intl'
import { Section } from './components'

export const CakesSection = () => {
  const { formatMessage } = useIntl()
  return (
    <Section id='cakes' title='Cakes' bgImage='cake.jpg' overlay>
      <p className='py-2'>{formatMessage({ id: 'CAKES_PARAGRAPH_1' })} </p>
      <p className='py-2'>{formatMessage({ id: 'CAKES_PARAGRAPH_2' })} </p>
      <p className='py-2'>{formatMessage({ id: 'CAKES_PARAGRAPH_3' })} </p>
      <p className='py-2'>{formatMessage({ id: 'CAKES_PARAGRAPH_4' })} </p>
      <p className='py-2'>{formatMessage({ id: 'CAKES_PARAGRAPH_5' })} </p>
    </Section>
  )
}
