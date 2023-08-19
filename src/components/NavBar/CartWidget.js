// Routing
import { NavLink } from "react-router-dom"

// Components
import Cart from "../svg/Cart";

function CartWidget() {
  return (
    <NavLink className="flex justify-center items-center relative w-10 -left-3 cursor-pointer" to="/checkout">
      <div className="relative py-2 transition-all ease-in hover:scale-[1.15] duration-150">
        <div className="t-0 absolute left-3">
          <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
            0
          </p>
        </div>
        <Cart />
      </div>
    </NavLink>
  );
}

export default CartWidget;
