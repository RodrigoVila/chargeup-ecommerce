import { Products } from '~features/products/Products'

import { Section } from './components'

export const ProductsSection = () => {
  return (
    <Section id="products" bgImage="purpleTexture.jpeg">
      <Products />
    </Section>
  )
}
