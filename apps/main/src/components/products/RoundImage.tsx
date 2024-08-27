import brownieImg from '@packages/assets/images/brownie-avocado-fresa.jpg'
import bananaBreadImg from '@packages/assets/images/banana-bread.jpg'
import chocoBarsImg from '@packages/assets/images/choco-bars.jpg'
import cinnamonRollsImg from '@packages/assets/images/cinnamon-rolls.jpg'
import energyBallsImg from '@packages/assets/images/energy-balls.jpg'
import energyBarsImg from '@packages/assets/images/energy-bars.jpg'
import brownieAvellanasImg from '@packages/assets/images/keto-brownie-avellanas.jpg'
import cheeseSconesImg from '@packages/assets/images/keto-scones-cheese.jpg'
import proteinBreadImg from '@packages/assets/images/keto-protein-bread.jpg'
import matchaBreadImg from '@packages/assets/images/matcha-bread.jpg'
import peanutBallsImg from '@packages/assets/images/peanut-balls.jpg'
import strawberriesCookiesImg from '@packages/assets/images/strawberry-cookies-tea.jpg'
import Image, { StaticImageData } from 'next/legacy/image'

const IMG_MAPPER: Record<string, StaticImageData> = {
  'brownie-avocado-fresa': brownieImg,
  'banana-bread': bananaBreadImg,
  'choco-bars': chocoBarsImg,
  'cinnamon-rolls': cinnamonRollsImg,
  'energy-balls': energyBallsImg,
  'energy-bars': energyBarsImg,
  'keto-scones-cheese': cheeseSconesImg,
  'keto-brownie-avellanas': brownieAvellanasImg,
  'keto-protein-bread': proteinBreadImg,
  'matcha-bread': matchaBreadImg,
  'peanut-balls': peanutBallsImg,
  'strawberry-cookies-tea': strawberriesCookiesImg,
}

type RoundImageProps = {
  imgUri: string
}

export const RoundImage = ({ imgUri }: RoundImageProps) => {
  return (
    <div className='absolute -top-28 mx-auto mb-6 h-60 w-60 overflow-hidden rounded-full border-2 bg-black bg-contain'>
      <Image src={IMG_MAPPER[imgUri]} alt={`${imgUri}`} />
    </div>
  )
}
