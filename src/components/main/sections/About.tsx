import { FC } from 'react'
import BackgroundOverlay from 'components/main/BackgroundOverlay'
import { colors } from '@utils/constants'

const AboutSection: FC = () => {
  return (
    <div className="relative m-auto flex h-full w-full flex-col justify-center bg-[url('/wooden.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <BackgroundOverlay color={colors.overlay} />
      <div className="z-20 mx-auto w-full pt-6 text-center text-3xl text-white">
        <div className="w-full py-8 px-2 text-center font-dinBold text-6xl text-white">
          QUE ES CHARGE UP ?
        </div>
        <div className="mx-auto max-w-4xl pb-20 font-extralight leading-snug">
          <p className="py-2">
            Soy Daniela Cabello y he creado Charge Up Bcn, con mucha ilusión y pasión. En principio
            porque amo cocinar, pero también porque los quiero ayudar.
          </p>
          <p className="py-2">
            En Charge Up se combinan todos los ingredientes para que nuestros snacks sean muy ricos
            y muy saludables. La idea principal de Charge Up Bcn es ayudar a las personas que
            quieren librarse del azúcar. También para aquellos que quieran cuidarse con los
            carbohidratos y también para quienes quieren consumir snacks altos en proteínas. Todos
            los snacks que verás en nuestra página, no contienen azúcar. Muchos de ellos son aptos
            para diabéticos. Tenemos opción de gluten free, vegan y dieta keto.
          </p>
          <p className="py-2">
            Deseamos que todos puedan consumir nuestros snacks, sabiendo que cuidaremos de su salud.
          </p>
          <p className="py-2">
            Queremos que compren nuestros snacks por todo el valor agregado que tienen y por todo el
            detrás de cada ingrediente y pensamiento que se ponen en ellos.
          </p>
          <p className="py-2">
            Los productos que se colocan son ecológicos, orgánicos y muchos de ellos hechos por mi
            misma. Adquiridos en comercios locales de Cataluña o startups en crecimiento al igual
            que nosotros.
          </p>
          {/* <p className="py-2">
            Este e-commerce tiene vida gracias al gran trabajo de diseño de Victoria Cabello y
            desarrollo Rodrigo Vila
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default AboutSection
