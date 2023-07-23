import { Section } from './components'

export const WhyUsSection = () => {
  return (
    <Section id="whyus" title="Por que elegirnos?" bgImage="peanut-butter.jpg" overlay>
      <p className="py-2">
        Trabajamos con los mejores productos y te garantizamos que todo lo que compres será de la
        mejor calidad cada ingrediente que colocamos está pensado estratégicamente para tu salud y
        bienestar.
      </p>
      <p className="py-2">
        Ya sea porque eres una persona saludable, porque necesitas mantenerte saludable, porque
        tienes algún problema de salud y no puedes comer determinados alimentos, por alguna dieta en
        particular como libre de azúcar o libre de gluten, porque eres vegano o porque simplemente
        lo prefieres así.
      </p>
    </Section>
  )
}
