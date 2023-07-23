// import { LazyImage } from '@packages/LazyImage'

type RoundImageProps = {
  imgUri: string
}

export const RoundImage = ({ imgUri }: RoundImageProps) => {
  return (
    <div className="absolute mx-auto mb-6 overflow-hidden bg-black bg-contain border-2 rounded-full -top-28 h-60 w-60">
      {/* <LazyImage src={`/images/${imgUri}.jpg`} alt={`${imgUri}`} width="100%" height="100%" /> */}
    </div>
  )
}
