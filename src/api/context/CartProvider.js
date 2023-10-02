// Hooks
import { createContext, useState, useEffect } from "react";

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
  // Subtotal
  const [subtotal, setSubtotal] = useState(0);

  // Const vars
  const shippingTax = 10;

  useEffect(() => {
    // Update cartTotalProducts everytime cartItems is modified
    const totalProducts = sumTotalQty();
    setCartTotalProducts(totalProducts);
    // Calculate subtotal everytime cartItems is modified
    calculateSubtotal();
  }, [cartItems]);

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
        const itemWithNewQty = newCartItems.find(
          (newItem) => newItem.id === item.productId
        );

        // Modify quantity with the newQty
        if (itemWithNewQty) {
          item.qty = itemWithNewQty.newQty;

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
   * calculateSubtotal *
   * Reduce the cartItems array to calculate the subtotal of the cart
   * @returns subtotal
   */
  const calculateSubtotal = () => {
    const subtotal = cartItems.reduce(
      (acc, product) => acc + product.price * product.qty,
      0
    );

    setSubtotal(subtotal);
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
   * Reduce cartItems array to sum all the qty
   * @returns totalProducts
   */
  const sumTotalQty = () => {
    const totalProducts = cartItems.reduce((total, item) => {
      // Check if qty is a string and parseInt to number
      const qty =
        typeof item.qty === "string" ? parseInt(item.qty, 10) : item.qty;
      return total + qty;
    }, 0);
    return totalProducts;
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
    subtotal,
    shippingTax,
    addToCart,
    updateCart,
    clearCart,
    goToCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
