import { FC } from 'react'
import BackgroundOverlay from '@main/BackgroundOverlay'

const WhyUsSection: FC = () => {
  return (
    <div className="relative m-auto flex h-screen w-full flex-col justify-center bg-[url('/driedfruits.jpg')] bg-cover bg-fixed bg-center bg-no-repeat text-center">
      <BackgroundOverlay color="Black2" />
      <div className="w-30 z-20 text-white">
        <div className="w-full py-8 px-2 text-center font-dinBold text-6xl text-white">
          POR QUE ELEGIRNOS?
        </div>
        <div className="mx-auto max-w-4xl text-xl md:text-4xl">
          <p className="p-2">
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
