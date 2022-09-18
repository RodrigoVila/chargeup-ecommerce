import BackgroundOverlay from '@main/BackgroundOverlay'
import { colors } from '@constants'
import { FC } from 'react'

const CakesSection: FC = () => {
  return (
    // bg-fixed bg-center bg-no-repeat  bg-[url('/wooden.jpg')] bg-cover
    <div
      id="cakes"
      className="relative mx-auto flex w-full min-h-screen h-screen*1.5 flex-col items-center justify-center bg-[url('/cake.jpg')] bg-cover bg-no-repeat bg-center py-6 px-2 text-center"
    >
      {/* <BackgroundOverlay color={colors.overlay} /> */}
      <div className="z-20 text-white">
        <h1 className="w-full py-12 px-2 text-center font-dinBold text-5xl">CAKES</h1>
        <div className="px-4 max-w-4xl pb-4 text-xl leading-snug">
          <p className="py-2">
            Sabemos que muchos de ustedes quieren festejar de manera saludable, es por ello que
            decidimos adaptar nuestras recetas en formato pasteles con decoración.
          </p>
          <p className="py-2">
            Al momento tenemos dos opciones de pasteles saludables los cuales sabemos que serán un
            éxitos y podrán disfrutar con sus personas queridas.
          </p>
          <p className="py-2">
            Hemos seleccionado estas dos opciones ya que el banana bread es realmente un éxito y a
            todos les gusta pero también queríamos tener una opción de chocolate para ofrecer y nos
            pareció que el Avocado fresa brownie iría perfecto ya que es vegano y sin gluten.
          </p>
          <p className="py-2">
            Pastel de banana bread: tiene una base igual a el banana bread cubierto con una capa de
            mantequilla de cacahuete, bananas troceadas e hilos de chocolate dark como decoración.
            Su peso es de 1,4 / 1, 5 kg y rinde aproximadamente 16 porciones.
          </p>
          <p className="py-2">
            Pastel de avocado y fresa brownie: su base es la del brownie de avocado y fresa ( harina
            de coco, avocado, fresa, chocolate dark) este brownie es libre de gluten, vegano, sin
            azúcar es idéntico al que hacemos, solamente que lo cambiamos de manera circular y el
            doble de alto con una decoración de frutos rojos. Este pastel rinde aproximadamente 12
            porciones y su peso es de 1 kg
          </p>
        </div>
      </div>
    </div>
  )
}

export default CakesSection
