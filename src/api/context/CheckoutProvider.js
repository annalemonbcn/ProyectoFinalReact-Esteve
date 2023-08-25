// Hooks
import { createContext, useState } from "react";

// Context
export const CheckoutContext = createContext();

const CheckoutProvider = (props) => {
  // State
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalProducts, setCartTotalProducts] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  // Actions
  const addToCart = (productId, qty, price) => {
    // Find existing product
    const existingProduct = cartItems.find(
      (item) => item.productId === productId
    );
    
    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item.productId === productId ? { ...item, qty: item.qty + qty } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { productId, qty }]);
    }
    
    setCartTotalProducts(cartTotalProducts+qty);
    setCartTotalPrice(cartTotalProducts+(qty * price));
  };

  return (
    <CheckoutContext.Provider
      value={{ cartItems, cartTotalProducts, cartTotalPrice, addToCart }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContext;
