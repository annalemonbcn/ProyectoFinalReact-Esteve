// Routing
import { NavLink } from "react-router-dom";

// Components
import CartSvg from "../svg/Cart";

// Hooks
import { useContext } from "react";

// Context
import { CartContext } from "../../api/context/CartProvider";

const CartWidget = () => {
  // Context
  const cartValues = useContext(CartContext);

  return (
    <div className="md:absolute right-3 md:right-24">
      <NavLink
        className="flex justify-center items-center relative w-10 -left-3 cursor-pointer"
        to="/checkout"
      >
        <div className="relative py-2 transition-all ease-in hover:scale-[1.15] duration-150">
          <div className="t-0 absolute left-3 top-[-0.2rem]">
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white mb-4">
              {cartValues.cartTotalProducts}
            </p>
          </div>
          <CartSvg />
        </div>
      </NavLink>
    </div>
  );
};

export default CartWidget;
