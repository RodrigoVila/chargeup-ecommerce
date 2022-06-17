import { FC } from 'react'
import BackgroundOverlay from '@main/BackgroundOverlay'
import { colors } from '@constants'

const WhyUsSection: FC = () => {
  return (
    <div
      id="whyus"
      className="relative mx-auto flex w-full flex-col items-center justify-center bg-orange-400 py-6 px-2 text-center"
    >
      {/* <BackgroundOverlay color={colors.overlay} /> */}
      <div className="z-20 text-white">
        <div className="w-full py-12 px-2 text-center font-dinBold text-5xl">
          POR QUE ELEGIRNOS?
        </div>
        <div className="px-4 max-w-4xl pb-4 text-xl leading-snug">
          <p className="py-2">
            Trabajamos con los mejores productos y te garantizamos que todo lo que compres será de
            la mejor calidad cada ingrediente que colocamos está pensado estratégicamente para tu
            salud y bienestar. Ya sea porque eres una persona saludable, porque necesitas mantenerte
            saludable, porque tienes algún problema de salud y no puedes comer determinados
            alimentos, por alguna dieta en particular como libre de azúcar o libre de gluten, porque
            eres vegano o porque simplemente lo prefieres así.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyUsSection
