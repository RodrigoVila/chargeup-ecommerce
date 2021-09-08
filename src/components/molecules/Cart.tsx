import { useCart } from "@context/cart/cart-context";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  // const { cart } = useCart();

  return (
    <div className="flex items-center text-2xl text-white">
      <FiShoppingCart className="w-12 text-3xl text-white" />
      {/* <div>{cart?.length}</div> */}
      <div>0</div>
    </div>
  );
};

export default Cart;
