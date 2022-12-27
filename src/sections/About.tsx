import { FC } from 'react';
import BackgroundOverlay from 'components/main/BackgroundOverlay';
import { colors } from '@constants/colors';
import Section from '@main/Section';

const AboutSection: FC = () => {
  // bg-fixed bg-center bg-no-repeat  bg-[url('/wooden.jpg')] bg-cover
  return (
    <Section id="about" title="Que es Charge UP?" bgImage="wooden.jpg" overlay>
      <p className="py-2">Hola soy Daniela Cabello, creadora de Charge Up Bcn.</p>
      <p className="py-2">
        Charge up bcn ha nacido por amor a la cocina, pero también porque los quiero ayudar.
      </p>
      <p className="py-2">
        En nuestra cocina se combinan todos los ingredientes para que nuestros snacks sean muy ricos
        y muy saludables.La idea principal es ayudar a las personas que quieren librarse del azúcar.
        Para aquellos que quieran cuidarse con los carbohidratos y también para quienes quieren
        consumir snacks altos en proteínas. Todos los snacks que verás en nuestra página, no
        contienen azúcar, muchos de ellos son aptos para diabéticos. Tenemos opción de gluten free,
        vegan y dieta keto.
      </p>
      <p className="py-2">
        Deseamos que todos puedan consumir nuestros snacks, sabiendo que cuidaremos de su salud, por
        todo el valor agregado que tienen, por todo el detrás de cada ingrediente y pensamiento que
        se ponen en ellos.
      </p>
      <p className="pt-2 pb-10">
        Los productos que se colocan son ecológicos, orgánicos y muchos de ellos hechos por mi
        misma. Adquiridos en comercios locales de Cataluña o startups en crecimiento al igual que
        nosotros.
      </p>
    </Section>
  );
};

export default AboutSection;
