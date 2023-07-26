import { Products } from '~features/products/Products'

import { Section } from './components'
import { useIntl } from 'react-intl'

export const ProductsSection = () => {
  const { formatMessage } = useIntl()
  return (
    <Section id='products' title={formatMessage({ id: 'PRODUCTS' })} bgImage='purpleTexture.jpeg'>
      <Products />
    </Section>
  )
}
