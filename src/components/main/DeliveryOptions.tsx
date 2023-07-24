import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { DeliveryType } from 'types';
import { DeliveryAreasMap } from './DeliveryAreasMap';

type DeliveryOptionsProps = {
  value: DeliveryType;
  setValue: Dispatch<SetStateAction<DeliveryType>>;
};

export const DeliveryOptions = ({ value, setValue }: DeliveryOptionsProps) => {
  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value as DeliveryType);
  };

  return (
    <div className="flex flex-col w-full h-full gap-4 overflow-y-auto">
      <h3 className="text-2xl text-center">Opciones de envio</h3>
      <p>
        Puede retirar su pedido por Hospitalet o bien realizamos envíos por medio de la empresa
        GLOVO, los mismos están a cargo del comprador. <br/>
        A continuación dejamos un mapa orientativo con precios <span className='font-bold'>apróximados</span> por cada area. Estos pueden variar tambien por
        concurrencia y otros factores como el clima.
      </p>
      <DeliveryAreasMap />
      <p className="py-2">Por favor seleccione modo de envío:</p>
      <div className="flex flex-col w-full gap-3">
        <div className="flex gap-2">
          <input
            type="radio"
            id="radioOption1"
            value="Pick UP"
            name="delivery"
            onChange={handleCheck}
          />
          <label htmlFor="radioOption1">
          <span className='font-bold underline'>Retira en Charge UP BCN (Gratis!). </span>
            Av Carrilet 123
          </label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="radioOption1"
            value="Delivery"
            name="delivery"
            onChange={handleCheck}
          />
          <label className="font-bold" htmlFor="radioOption1">
            <span className='font-bold underline'>Envio a domicilio:</span> (Acepto los costos de envio de GLOVO y acepto las
            condiciones descriptas arriba)
          </label>
        </div>
      </div>
    </div>
  );
};
