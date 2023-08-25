// Hooks
import { useContext } from "react";

// Context
import { CartContext } from "../api/context/CartProvider";

const Checkout = () => {
  const { cartItems, cartTotalProducts, cartTotalPrice } =
    useContext(CartContext);

    console.log(cartItems)

  return (
    <div>
      <h1 className="mt-40">Checkout</h1>
      <p>Cart items id: {cartItems[0].productId} - Qty: {cartItems[0].qty}</p>
      <p>Cart total items: {cartTotalProducts}</p>
      <p>Cart total price: {cartTotalPrice}€ </p>
    </div>
  );
};

export default Checkout;
