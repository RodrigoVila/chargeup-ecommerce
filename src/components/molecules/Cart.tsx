import { useCart } from "@context/cart/cart-context";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  // const { cart } = useCart();

  return (
    <div className="z-20 flex items-center text-2xl text-purple3">
      <FiShoppingCart className="w-12 text-3xl text-purple3" />
      {/* <div>{cart?.length}</div> */}
      <div>0</div>
    </div>
  );
};

export default Cart;
