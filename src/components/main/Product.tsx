import { useState, FC } from 'react'
import Image from 'next/image'
import ReactTooltip from 'react-tooltip'

import Button from '@main/Button'
import Counter from '@main/Counter'
import RoundImage from '@main/RoundImage'
import { colors } from '@constants'
import useAppActions from '@hooks/useAppActions'

type Props = ProductType & { onClick: (product: ProductType) => void }

const Product: FC<Props> = ({
  id,
  title,
  description,
  nutritionalInfo,
  suitableForInfo,
  price,
  imgUri,
  onClick,
}) => {
  const [count, setCount] = useState(0)

  const { addToCart, displayInfoMessage, displaySuccessMessage } = useAppActions()

  const addOne = () => setCount((prevCount) => prevCount + 1)

  const subtractOne = () => {
    if (count < 1) return 0
    setCount((prevCount) => prevCount - 1)
  }

  const addItemToCart = () => {
    if (count === 0) {
      displayInfoMessage('La cantidad tiene que ser mayor a 0')
      return
    }
    const item: ProductType = {
      id,
      title,
      description,
      nutritionalInfo,
      suitableForInfo,
      price,
      quantity: count,
      imgUri,
    }
    addToCart(item)
    displaySuccessMessage('Producto agregado!')
  }

  const iconStyle = 'relative h-11 w-11'

  return (
    <>
      <ReactTooltip />

      <div className="mx-2 mt-32 mb-4 flex w-full max-w-sm flex-col items-center justify-end rounded-xl bg-black text-white lg:mx-8 lg:max-w-360">
        <div className="relative flex h-full flex-col justify-end px-8 pb-4">
          <div className="mb-8 flex h-32 w-full items-center justify-center">
            {imgUri && <RoundImage imgUri={imgUri} />}
          </div>
          <div className="text-base font-semibold md:text-xl">{title.toUpperCase()}</div>
          <div className="my-3 flex text-sm font-semibold md:text-base">
            {suitableForInfo.vegan && (
              <div className={`${iconStyle} mr-1`} data-tip="Vegano">
                <Image src="/icons/vegan-white.png" layout="fill" />
              </div>
            )}
            {suitableForInfo.protein && (
              <div className={`${iconStyle} mx-1`} data-tip="Alto en proteina">
                <Image src="/icons/high-protein-white.svg" layout="fill" />
              </div>
            )}
            {suitableForInfo.glutenFree && (
              <div className={`${iconStyle} mx-1`} data-tip="Gluten Free">
                <Image src="/icons/gluten-free-white.png" layout="fill" />
              </div>
            )}
            {suitableForInfo.keto && (
              <div className={`${iconStyle} mx-1`} data-tip="Keto">
                <Image src="/icons/keto-white.svg" layout="fill" />
              </div>
            )}
          </div>
          <div className="cursor-pointer text-sm md:text-lg" onClick={onClick}>
            {description?.short}
          </div>
          {/* text-[#a855f7] */}
          <div className="cursor-pointer font-semibold text-orange-400" onClick={onClick}>
            ver +
          </div>
          <div className="my-4 flex flex-col text-sm md:text-base">
            <div className="mb-4">Info Nutricional:</div>
            <div className="flex items-center justify-around text-lg">
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-12 w-12" data-tip="Calorias">
                  <Image src="/icons/kcal-white.svg" layout="fill" />
                </div>
                <div className="ml-1 text-center">{nutritionalInfo.calories}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className={iconStyle} data-tip="Carbohidratos">
                  <Image src="/icons/carbs-white.png" layout="fill" />
                </div>
                <div className="ml-1 text-center">{nutritionalInfo.carbs}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className={iconStyle} data-tip="Proteina">
                  <Image src="/icons/protein-white.svg" layout="fill" />
                </div>
                <div className="ml-1 text-center">{nutritionalInfo.protein}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className={iconStyle} data-tip="Grasas saludables">
                  <Image src="/icons/fat-white.png" layout="fill" />
                </div>
                <div className="ml-1 text-center">{nutritionalInfo.fat}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="my-2 text-2xl font-semibold md:text-4xl">{`€${price}`}</div>
          </div>
        </div>
        <div className="mb-4 flex w-full items-center justify-center px-4">
          <Counter count={count} subtractOne={subtractOne} addOne={addOne} />
          <Button title="Agregar" color={colors.purple} onClick={addItemToCart} />
        </div>
      </div>
    </>
  )
}

export default Product
