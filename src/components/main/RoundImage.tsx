import { FC } from 'react'
import Image from 'next/image'

interface Props {
  imgUri: string
}

const RoundImage: FC<Props> = ({ imgUri }) => {
  return (
    <div className="absolute mx-auto mb-6 overflow-hidden bg-black bg-contain border-2 rounded-full -top-28 h-60 w-60">
      <Image objectFit="cover" layout="fill" src={`/${imgUri}.jpg`} alt="" />
    </div>
  )
}

export default RoundImage
