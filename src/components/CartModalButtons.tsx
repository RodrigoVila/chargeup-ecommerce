import React from 'react';
import Button from '@shared/Buttons/CustomButton';

type CartModaLButttonsProps = {
  next?: () => void;
  back?: () => void;
  submit?: () => void;
  loading?: boolean;
  disabled?: boolean
};

export const CartModalButtons = ({ next, back, submit, loading, disabled }: CartModaLButttonsProps) => {
  return (
    <div className="flex flex-col w-full gap-2 mt-4">
      {next && (
        <Button className="w-full text-base" onClick={next}>
          Siguiente
        </Button>
      )}

      {submit && (
        <Button className="w-full text-base" onClick={submit} loading={loading} disabled={disabled}>
          Ir a Pagar
        </Button>
      )}

      {back && (
        <Button className="w-full text-base" type="outlined" onClick={back}>
          Atras
        </Button>
      )}
    </div>
  );
};
