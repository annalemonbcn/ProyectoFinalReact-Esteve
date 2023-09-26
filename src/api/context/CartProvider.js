// Hooks
import { createContext, useState } from "react";

// Toaster
import { toast } from "sonner";

// Routing
import { useNavigate } from "react-router-dom";

// Context
export const CartContext = createContext();

// Provider
const CartProvider = (props) => {
  /** State */
  // Products id
  const [cartItems, setCartItems] = useState([]);
  // Total items in the cart
  const [cartTotalProducts, setCartTotalProducts] = useState(0);
  
  /**
   * addToCart *
   * Set to the state the specified qty items + id
   * Set to the state the total qty items
   * @param {*} productId
   * @param {*} qty
   */
  const addToCart = (productId, title, price, image, qty) => {
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
        setCartItems([...cartItems, { productId, title, price, image, qty }]);
      }

      // Update total cart qty
      setCartTotalProducts(cartTotalProducts + qty);
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

  /**
   * updateCart *
   * Update the cart with the new qty
   * @param {*} newCartItems  --> array with info of the updated products
   */
  const updateCart = (newCartItems) => {
    try {
      // Aux arr
      let auxCartItems = [];

      // Loop cartItems
      for (const item of cartItems) {
        const existingItem = newCartItems.find(
          (newItem) => newItem.id === item.productId
        );

        // If is an item to update, modify quantity
        if (existingItem) {
          item.qty = existingItem.newQty;

          // qty = 0 don't push into auxArray just to delete the product
          if (item.qty > 0) {
            // Push item into aux array
            auxCartItems.push(item);
          }
        } else {
          // If don't, just add the item into auxArray
          auxCartItems.push(item);
        }
      }

      // Set cartItems
      setCartItems(auxCartItems);

      // Set cartTotalItems
      setCartTotalProducts(sumTotalQty());

      // Toast
      toast.success("Your cart has been updated", {
        style: {
          background: "aquamarine",
        },
      });
    } catch (error) {
      // Toast
      toast.error("The cart couldn't be updated. Please try again", {
        style: {
          background: "lightpink",
        },
      });
      console.error("Error updating the cart:", error);
    }
  };

  /**
   * clearCart
   * Reset the state: [] and 0
   */
  const clearCart = () => {
    setCartItems([]);
    setCartTotalProducts(0);
  };

  /**
   * sumTotalQty
   * Loop the cartItems array and sum all the qty
   * @returns totalSum
   */
  const sumTotalQty = () => {
    let totalSum = 0;

    cartItems.forEach((item) => {
      if (typeof item.qty === "string") {
        totalSum += parseInt(item.qty);
      } else {
        totalSum += item.qty;
      }
    });
    return totalSum;
  };

  /**
   * Redirect to cart
   */
  const navigate = useNavigate();
  const goToCart = () => {
    navigate("/checkout");
  };

  // Provider value
  const cartContextValue = {
    cartItems,
    cartTotalProducts,
    addToCart,
    updateCart,
    clearCart,
    goToCart
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
