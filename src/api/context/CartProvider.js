// Context
import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

// Provider
const CartProvider = (props) => {

  /** State */
  // Products id
  const [cartItems, setCartItems] = useState([]);
  // Total items in the cart
  const [cartTotalProducts, setCartTotalProducts] = useState(0);


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

    setCartTotalProducts(cartTotalProducts + qty);
  };

  // useEffect(() => {
  //   console.log('cartItems', cartItems)
  //   console.log('cartTotalProducts', setCartTotalProducts)
  //   console.log('cartTotalPrice', setCartTotalPrice)
  // }, [cartItems, cartTotalProducts, cartTotalPrice])
  

  const cartContextValue = {
    cartItems,
    cartTotalProducts,
    addToCart
  };

  return (
    <CartContext.Provider
      value={cartContextValue}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
