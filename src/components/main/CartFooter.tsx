import React from "react";
import Button from "./Button";

type Props = {
  onSubmit: () => void;
};

const CartFooter = ({ onSubmit }: Props) => {
  return (
    <div className="w-full px-2 pt-1 pb-3 text-white bg-tranlucentBlack2">
      <div className=" lg:text-2xl">Resumen del pedido</div>
      <div className="flex flex-col w-1/4 mx-auto lg:text-lg">
        <div className="flex justify-between ">
          <div className="mx-1">1 Producto</div>
          <div className="mx-1">e100</div>
        </div>
        <div className="flex justify-between">
          <div className="mx-1">Entrega</div>
          <div className="mx-1">Gratis</div>
        </div>
        <div className="flex justify-between">
          <div className="mx-1">Total</div>
          <div className="mx-1">e100</div>
        </div>
      </div>
      <div className="w-1/3 ml-auto">
        <Button
          title="Ir a pagar"
          color="white"
          type="outlined"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default CartFooter;
