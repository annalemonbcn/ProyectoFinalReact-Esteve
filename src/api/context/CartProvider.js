// Hooks
import { createContext, useState } from "react";

// Toaster
import { toast } from "sonner";

// Context
export const CartContext = createContext();

// Provider
const CartProvider = (props) => {
  /** State */
  // Products id
  const [cartItems, setCartItems] = useState([]);
  // Total items in the cart
  const [cartTotalProducts, setCartTotalProducts] = useState(0);

  // Actions
  /**
   * Set to the state the specified qty items + id
   * Set to the state the total qty items
   * @param {*} productId
   * @param {*} qty
   */
  const addToCart = (productId, qty) => {
    try {
      // Find existing product
      const existingProduct = cartItems.find(
        (item) => item.productId === productId
      );

      // Add itemId + qty
      if (existingProduct) {
        const updatedCartItems = cartItems.map((item) =>
          item.productId === productId ? { ...item, qty: item.qty + qty } : item
        );
        setCartItems(updatedCartItems);
      } else {
        setCartItems([...cartItems, { productId, qty }]);
      }

      // Update total cart qty
      setCartTotalProducts(cartTotalProducts + qty);

      // Toast
      toast.success("Product(s) added to your cart :)", {
        style: {
          background: "aquamarine",
        },
      });
    } catch (error) {
      // Toast
      toast.error(
        "The products haven't  been added to you cart. Please try again",
        {
          style: {
            background: "lightpink",
          },
        }
      );
    }
  };

  /**
   * Reset the state: [] and 0
   */
  const clearCart = () => {
    setCartItems([]);
    setCartTotalProducts(0);
  };

  const cartContextValue = {
    cartItems,
    cartTotalProducts,
    addToCart,
    clearCart
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
