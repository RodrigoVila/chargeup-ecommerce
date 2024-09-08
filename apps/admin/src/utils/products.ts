import brownieImg from '@packages/assets/images/brownie-avocado-fresa.jpg'
import bananaBreadImg from '@packages/assets/images/banana-bread.jpg'
import chocoBarsImg from '@packages/assets/images/choco-bars.jpg'
import cinnamonRollsImg from '@packages/assets/images/cinnamon-rolls.jpg'
import energyBallsImg from '@packages/assets/images/energy-balls.jpg'
import energyBarsImg from '@packages/assets/images/energy-bars.jpg'
import brownieAvellanasImg from '@packages/assets/images/keto-brownie-avellanas.jpg'
import proteinBreadImg from '@packages/assets/images/keto-protein-bread.jpg'
import matchaBreadImg from '@packages/assets/images/matcha-bread.jpg'
import peanutBallsImg from '@packages/assets/images/peanut-balls.jpg'
import strawberriesCookiesImg from '@packages/assets/images/strawberry-cookies-tea.jpg'

import { LabelAndPriceType } from '@packages/types'

export const IMG_MAPPER: Record<string, string> = {
  'brownie-avocado-fresa': brownieImg,
  'banana-bread': bananaBreadImg,
  'choco-bars': chocoBarsImg,
  'cinnamon-rolls': cinnamonRollsImg,
  'energy-balls': energyBallsImg,
  'energy-bars': energyBarsImg,
  'keto-brownie-avellanas': brownieAvellanasImg,
  'keto-protein-bread': proteinBreadImg,
  'matcha-bread': matchaBreadImg,
  'peanut-balls': peanutBallsImg,
  'strawberry-cookies-tea': strawberriesCookiesImg,
}

export const getProductSubtotal = (
  selectedSize?: LabelAndPriceType | null,
  selectedExtras?: LabelAndPriceType[] | null,
) => {
  if (!selectedSize || !selectedExtras) return 0
  let extrasPrice = 0

  selectedExtras.map((extra) => {
    if (extra.price) {
      extrasPrice += extra.price
      return extra
    } else {
      return extra
    }
  })

  const subTotal = selectedSize.price + extrasPrice
  return subTotal
}
