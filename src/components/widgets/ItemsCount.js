// Hooks
import { useState, useContext } from "react";

// Components
import CartSvg from "../svg/Cart";
import DrawerComp from "./DrawerComp";

// Toaster
import { toast } from "sonner";

// Context
import { CartContext } from "../../api/context/CartProvider";


const ItemsCount = ({ id, title, price, image }) => {
  // Context
  const { addToCart } = useContext(CartContext);

  // State
  let [qty, setQty] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Actions
  const addition = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const substraction = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  const auxAddToCart = async () => {
    try {
      await addToCart(id, title, price, image, qty);
      setIsDrawerOpen(true);
    } catch (error) {
      // Toast
      toast.error("There was an error while adding the products to your cart", {
        style: {
          background: "lightpink",
        },
      });
      console.error("Error adding products to cart:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between md:justify-start lg:justify-between mt-4">
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
          onClick={auxAddToCart}
          className="w-[50px] h-[50px] border-slate-500 border-solid border-[1px] flex justify-center items-center relative left-[-20px] md:left-20 lg:left-0 hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
        >
          <CartSvg />
        </div>
      </div>

      {/* Drawer component */}
      {isDrawerOpen && (
        <DrawerComp open={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      )}
    </>
  );
};

export default ItemsCount;
