import { useIntl } from 'react-intl'
import { Section } from './components'

export const AboutSection = () => {
  const { formatMessage } = useIntl()
  return (
    <Section id='about' title={formatMessage({ id: 'ABOUT_TITLE' })} bgImage='wooden.jpg' overlay>
      <p className='py-2'>{formatMessage({ id: 'ABOUT_PARAGRAPH_1' })}</p>
      <p className='py-2'>{formatMessage({ id: 'ABOUT_PARAGRAPH_2' })}</p>
      <p className='py-2'>{formatMessage({ id: 'ABOUT_PARAGRAPH_3' })}</p>
      <p className='py-2'>{formatMessage({ id: 'ABOUT_PARAGRAPH_4' })}</p>
      <p className='py-2'>{formatMessage({ id: 'ABOUT_PARAGRAPH_5' })}</p>
    </Section>
  )
}
