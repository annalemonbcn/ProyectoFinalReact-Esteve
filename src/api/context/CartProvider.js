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
      toast.success("Product(s) added to your cart :)", {
        style: {
          background: "aquamarine",
        }
      });
    } catch (error) {
      toast.error(
        "The products haven't  been added to you cart. Please try again", {
          style: {
            background: "lightpink"
          }
        }
      );
    }
  };

  const cartContextValue = {
    cartItems,
    cartTotalProducts,
    addToCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
