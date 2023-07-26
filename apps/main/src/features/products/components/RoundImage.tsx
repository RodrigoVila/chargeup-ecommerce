import { LazyImage } from '~components/LazyImage'

type RoundImageProps = {
  imgUri: string
}

export const RoundImage = ({ imgUri }: RoundImageProps) => {
  return (
    <div className='absolute -top-28 mx-auto mb-6 h-60 w-60 overflow-hidden rounded-full border-2 bg-black bg-contain'>
      <LazyImage src={`/images/${imgUri}.jpg`} alt={`${imgUri}`} width='100%' height='100%' />
    </div>
  )
}
