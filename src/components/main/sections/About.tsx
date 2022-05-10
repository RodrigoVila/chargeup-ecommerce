import BackgroundOverlay from 'components/main/BackgroundOverlay'

const AboutSection = () => {
  return (
    <div className="relative m-auto flex h-full w-full flex-col justify-center  bg-[url('/wooden.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <BackgroundOverlay color="Black" />
      <div className="z-20 mx-auto w-full pt-6 text-center text-3xl text-white drop-shadow-sm filter">
        <div className="w-full py-8 text-center text-6xl px-2 text-white">
          QUE ES CHARGE UP ?
        </div>
        <div className="max-w-4xl mx-auto leading-snug pb-20">
          <p className="py-2">
            Mi nombre es Daniela Cabello, soy Argentina y vivo en Barcelona desde hace 3 años. He
            creado Charge Up Bcn, con mucha ilusión y pasión. En principio porque amo cocinar, lo
            hago desde muy pequeña. He comenzado con los snacks saludables porque he sido vegana
            durante 4 años, me costaba muchísimo conseguir snacks veganos y más aún que fueran
            saludables, es por ello que comencé a producir mis propios snacks. En el primer estado
            de alarma mis hormonas comenzaron a dejar de funcionar como antes y mi estrés aumentó,
            entonces subí bastante de peso (a mi gusto) , más allá de hacer muchisimo ejercicio.
            Comencé con más dietas y elimine 100% de azúcar en mi vida. Conocí la dieta Keto y si
            bien hoy no la hago al 100%, me parece una opción genial ya que eliminamos el gluten,
            azúcares y se consume una dosis mínima de carbohidratos al día.
          </p>
          <p className="py-2">
            Esta dieta me entusiasma aún más porque muchos de mis productos son aptos para
            intolerantes al gluten y para personas que tienen problemas de azúcares y hasta
            problemas hormonales ya que no pueden comer determinados alimentos.
          </p>
          <p className="py-2">
            Hoy muchas personas me escriben contándome porque quieren comer los snacks que preparó y
            eso es lo que más me emociona.
          </p>
          <p className="py-2">
            Quiero que compren mis snacks por todo el valor agregado que tienen y por todo el detrás
            de cada ingrediente y pensamiento que pongo en ellos.
          </p>
          <p className="py-2">
            Los productos que coloco son ecológicos, orgánicos y muchos de ellos hechos por mi
            misma. Adquiridos en comercios locales de Catalunya o startups en crecimiento al igual
            que yo. No quiero engañarles en nada, porque ya lo han hecho conmigo. Los precios de mis
            productos son por todo lo que llevan y mi mano de obra, ya que Charge Up Bcn soy yo
            misma y nadie más.
          </p>
          <p className="py-2">
            Iré creciendo gracias a ustedes y desde ya gracias por elegirme. Se que no los
            defraudaré porque todo lo que se hace con amor y pasión, prospera!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
