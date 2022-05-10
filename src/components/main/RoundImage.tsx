import { FC } from 'react'
import Image from 'next/image'

interface Props {
  imgUri: string
}

const RoundImage: FC<Props> = ({ imgUri }) => {
  return (
    <div className="relative mx-auto -mt-32 mb-6 h-60 w-60 overflow-hidden rounded-full border-2 bg-contain">
      <Image objectFit="cover" layout="fill" src={`/${imgUri}.jpg`} alt="" />
    </div>
  )
}

export default RoundImage
