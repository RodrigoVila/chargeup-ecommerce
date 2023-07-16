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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum maxime doloremque
        repellendus magnam odit officia ullam maiores sint est molestiae dolorem id excepturi, sed
        necessitatibus pariatur dolor beatae magni.
      </p>
      <DeliveryAreasMap />
      <p className="py-2">Por favor seleccione modo de envío:</p>
      <div className="flex flex-col w-full gap-3">
        <div className="flex gap-2">
          <input
            type="radio"
            id="radioOption1"
            value="Delivery"
            name="delivery"
            onChange={handleCheck}
          />
          <label className="font-bold" htmlFor="radioOption1">
            Acepto los costos de envio de GLOVO y las posibles modificaciones de precio descriptas
            arriba.
          </label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="radioOption1"
            value="Pick UP"
            name="delivery"
            onChange={handleCheck}
          />
          <label className="font-bold" htmlFor="radioOption1">
            Retira en Charge UP BCN Hospitalet. Av Carrilet 123 (Free!)
          </label>
        </div>
      </div>
    </div>
  );
};
