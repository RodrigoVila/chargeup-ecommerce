import Image from 'next/image'

const KetoSection = () => {
  return (
    <div className="relative mx-auto flex w-full flex-col items-center justify-center py-6 px-2 text-center ">
      <div className="w-30">
        <div className="w-full py-10 text-center text-8xl ">Que es Keto?</div>
        <div className="relative my-8 h-screen/2 w-full bg-contain">
          <Image src="/keto-graphic.png" objectFit="contain" layout="fill" />
        </div>
        <div className="mx-auto max-w-4xl pb-4 text-xl leading-snug">
          <p className="py-2">
            En Charge Up Bcn, lo que tratamos de hacer, es que aquellas personas que siguen
            rigurosamente este tipo de dietas. Puedan comer snacks sin problema alguno ya que
            nuestras recetas son keto. Es por ello que los snacks de este tipo ya vienen pesados con
            los gramajes necesarios para que puedan comerlos sin cumplir y que puedan incluirlos en
            sus tracks diarios.
          </p>
          <p className="py-2">
            Recuerden siempre consultar todo este tipo de información con un nutricionista
            matriculado, ya que hay distintos tipos de dietas keto que se pueden adaptar. Somos
            conscientes de lo difícil que es llevarla y por eso queremos ayudarlos y acompañarlos!
          </p>
        </div>
      </div>
    </div>
  )
}

export default KetoSection
