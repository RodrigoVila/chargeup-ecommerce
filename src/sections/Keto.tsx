import { FC } from 'react'
import Image from 'next/image'

const KetoSection: FC = () => {
  return (
    <div
      id="keto"
      className="relative flex flex-col items-center justify-center w-full px-2 py-6 mx-auto text-center "
    >
      <h1 className="w-full px-2 py-12 text-5xl text-center xl:mt-10 font-dinBold">QUE ES KETO ?</h1>
      <div className="max-w-4xl px-4 pb-4 text-xl leading-snug">
        <p className="py-2">
          La dieta cetogénica (Keto) es un plan de alimentación bajo en carbohidratos y alto en
          grasas vinculado con muchos beneficios potenciales para la salud. Seguir una dieta
          cetogénica no se trata sólo de limitar la ingesta de carbohidratos. El objetivo es hacer
          la transición de nuestro cuerpo a un modo de quema de grasa conocido como cetosis. Para
          hacer esto, la mayoría de las calorías deben provenir de las grasas.
        </p>
        <p className="py-2">
          En la cetosis, nuestro cuerpo quema grasa para obtener energía en lugar de azúcar. Algunas
          partes de nuestro cuerpo, como nuestro cerebro, solo pueden utilizar el azúcar en sangre
          como fuente de energía. Con una dieta muy baja en carbohidratos, nuestro hígado comienza a
          crear compuestos conocidos como cuerpos cetónicos para suministrar la energía necesaria a
          estas células dependientes de la glucosa.
        </p>
        <p className="py-2">
          Para comenzar con una dieta cetogénica y alcanzar la cetosis, la mayoría de las personas
          deben limitar su ingesta total de carbohidratos a entre 20 y 50 gramos por día. Para la
          mayoría, esto significa que del 5% al ​​10% de la ingesta energética total puede provenir
          de los carbohidratos.
        </p>
        <p className="py-2">
          Los rangos de macronutrientes recomendados para una dieta cetogénica son 10% de
          carbohidratos, 20% de proteínas y 70% de grasas.
        </p>
        <p className="">
          <b> Es importante señalar que no existe una dieta cetogénica “estándar”.</b>
        </p>
        <div className="relative w-full my-8 bg-contain h-screen/2">
          <Image src="/keto-graphic2.png" objectFit="contain" layout="fill" />
        </div>
        <h4 className="w-full pt-8 pb-4 text-3xl font-dinBold lg:text-left">
          Alimentos típicos que se consumen en la dieta cetogénica
        </h4>
        <ul className="flex flex-col px-4 text-left">
          <li>- Pescados y mariscos.</li>
          <li>- Queso.</li>
          <li>
            - Grasas naturales como aguacate, mantequilla de pasto, aceite de coco y aceite de
            oliva.
          </li>
          <li>- Carnes.</li>
          <li>- Huevos.</li>
          <li>- Verduras que crecen sobre el suelo.</li>
        </ul>
        <h4 className="w-full pt-8 pb-4 text-3xl font-dinBold lg:text-left">
          Alimentos que NO se deben consumir en una dieta keto
        </h4>
        <ul className="flex flex-col px-4 pb-10 text-left">
          <li>- Alimentos azucarados.</li>
          <li>- Alimentos ultraprocesados.</li>
          <li>- Cereales</li>
          <li>- Arroz.</li>
          <li>- Pastas.</li>
          <li>- Legumbres.</li>
          <li>- Tuberculos.</li>
          <li>- Alcohol.</li>
          <li>- Bebidas deportivas.</li>
          <li>- Yogures endulzados.</li>
          <li>- Helados.</li>
          <li>
            - Frutas: hay muy pocas que se pueden consumir, como por ejemplo frutos rojos ya que
            mayoría de la fruta tiene demasiado azúcar para la dieta keto.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default KetoSection