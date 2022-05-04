import Image from 'next/image'

interface Props {
  imgName: string
}

const RoundImage = ({ imgName }: Props) => {
  return (
    <div
      className="relative mx-auto -mt-32 mb-6 h-60 w-60 overflow-hidden rounded-full border-2 bg-contain"
    >
      <Image className="" objectFit="cover" layout="fill" src={`/${imgName}.jpg`} alt="" />
    </div>
  )
}

export default RoundImage
