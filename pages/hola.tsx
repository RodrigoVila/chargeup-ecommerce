import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

const Hola = () => {
  return (
    <div className="flex flex-col h-screen mx-8 text-sm font-normal">
      {/* barra superior */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          {/* logo eap  izq */}
          <div className="flex items-center">
            <AiOutlinePlusCircle size={35} />
            <div className="mb-1 ml-2 text-xl font-semibold">
              <div className="">eap</div>
              <div className="">dreta</div>
              <div className="">de l'eixample</div>
            </div>
          </div>
          <div className="tracking-wider">EAP DRETA DE L'EIXAMPLE, SLP</div>
        </div>
        {/* JUSTIFICANT DE VISIT mid */}
        <div className="mx-2 mb-8 font-bold">JUSTIFICANT DE VISITA</div>
        {/* data right*/}
        <div className="">
          <div className="flex items-center justify-between">
            <div className="mr-8">Data:</div>
            <div className="">07/04/2022 11:41:12</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="">Usuari:</div>
            <div className="text-xs">P838USA9</div>
          </div>
          <div className="flex justify-end w-full text-xs">VISRW500</div>
        </div>
      </div>
      <div className="w-full mt-6 mb-10 border-b-2 border-black"></div>
      <div className="mx-8 ">
        <div className="text-justify">
          El senyor/La senyora MARIA AGUSTINA SORIA SAN JUAN ha estat at atès/a
          en el centre CAP ROGER DE FLOR 2J el dia 07/04/2022 a las 11:02 h. Ha
          sortit de la visita a les 11:41 h.
        </div>
        <div className="mt-32">
          <div className="">CAP ROGER DE FLOR 2J</div>
          <div className="">cr. ROGER DE FLOR 196, -</div>
          <div className="">BARCELONA, 06 de Abril de 2022</div>
        </div>
      </div>
    </div>
  )
}

export default Hola
