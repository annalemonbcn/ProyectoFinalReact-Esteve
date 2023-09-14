// Hooks
import { useState, useContext } from "react";

// Components
import CartSvg from "../svg/Cart";

// Context
import { CartContext } from "../../api/context/CartProvider";


const ItemsToCart = ({ id }) => {

  // Context
  const { addToCart } = useContext(CartContext);

  // State
  let [qty, setQty] = useState(1);

  // Actions
  const addition = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const substraction = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center justify-between gap-3">
        <button
          className="flex justify-center items-center font-bold text-xl w-[30px]"
          onClick={substraction}
        >
          -
        </button>
        <p className="w-[20px] text-center">{qty}</p>
        <button
          className="flex justify-center items-center font-bold text-xl w-[30px]"
          onClick={addition}
        >
          +
        </button>
      </div>
      <div
        onClick={() => addToCart(id, qty)}
        className="w-[50px] h-[50px] border-slate-500 border-solid border-[1px] flex justify-center items-center relative left-[-20px] lg:left-0 hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
      >
        <CartSvg />
      </div>
    </div>
  );
};

export default ItemsToCart;
