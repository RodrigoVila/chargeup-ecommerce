import { useState, useEffect } from 'react'
import Image from 'next/image'

import { removeFromCart } from '@redux/actionCreators/cart'
import RoundImage from '@main/RoundImage'
import Counter from '@main/Counter'
import { GiCancel } from 'react-icons/gi'
import { useAppDispatch } from '@hooks'

const HorizontalProduct = ({
  id,
  title,
  description,
  nutritionalInfo,
  suitableForInfo,
  price,
  quantity,
  imgUri,
}: ProductType) => {
  const dispatch = useAppDispatch()
  const [count, setCount] = useState(0)

  const addOne = () => setCount((prevCount) => prevCount + 1)

  const subtractOne = () => {
    if (count < 1) return 0
    setCount((prevCount) => prevCount - 1)
  }

  const removeItem = () => {
    //TODO: FIX Type
    dispatch(removeFromCart(id))
  }

  useEffect(() => {
    console.log('!!', suitableForInfo)
  }, [suitableForInfo])

  return (
    <div className="my-8 mx-6 flex max-h-64 w-full bg-tranlucentBlack2 pr-2 text-white">
      <div
        className={'relative mx-auto overflow-hidden rounded-full  bg-contain'}
      >
        <Image
          className=""
          objectFit="cover"
          layout="fill"
          src="/brownies.jpg"
          alt=""
        />
      </div>
      <div className="relative flex-col">
        <div
          className="absolute right-0 top-1 z-20 m-1 flex cursor-pointer flex-row"
          onClick={removeItem}
        >
          <GiCancel color="red" size={22} />
        </div>
        <div className="my-4 text-base font-semibold md:text-xl">
          {title.toUpperCase()}
        </div>
        <div className="text-sm md:text-lg">{description.slice(0, 50)}</div>
        <div className="my-4 flex w-full text-sm md:text-base">
          <div className="flex-col">
            <div>Info nutricional:</div>
            <div className="text-sm md:text-base ">{`Cal: ${nutritionalInfo.calories} | Car: ${nutritionalInfo.carbs} | Fat: ${nutritionalInfo.fat} | Prot: ${nutritionalInfo.protein}`}</div>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm font-semibold md:text-base">
          <div className="flex-col">
            <div>Info nutricional:</div>
            <div className="text-sm md:text-base ">{`GF: ${suitableForInfo.glutenFree} | Keto: ${suitableForInfo.keto} | Prot: ${suitableForInfo.protein} | Prot: ${suitableForInfo.vegan}`}</div>
          </div>
          <div className="relative -mr-4 flex">
            <Counter count={count} subtractOne={subtractOne} addOne={addOne} />
            <div className="ml-4 h-full md:text-3xl">{`€${count * price}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HorizontalProduct
