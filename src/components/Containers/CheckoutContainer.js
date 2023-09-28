// Hooks
import { useState, useContext, useRef } from "react";

// Context
import { CartContext } from "../../api/context/CartProvider";

// Components
import CheckoutView from "../views/CheckoutView";


const CheckoutContainer = () => {
  // Ref
  const checkoutFormRef = useRef();

  //State
  const [isQtyChanged, setIsQtyChanged] = useState(false); // --> did the user modified the qty?
  const [itemsToUpdate, setItemsToUpdate] = useState([]); // --> products that the user modified that needs to be updated
  const [showForm, setShowForm] = useState(false);
  const [token, setToken] = useState(null);

  // Context: cart info
  const {
    cartItems,
    shippingTax,
    subtotal,
    clearCart,
    updateCart
  } = useContext(CartContext);

  /**
   * Aux method to setItemsToUpdate
   * Copy the original array and modifiy the qty for every item
   * @param {*} objWithNewQty
   */
  const auxSetItemsToUpdate = (objWithNewQty) => {
    const existingProduct = itemsToUpdate.find(
      (product) => product.id === objWithNewQty.id
    );

    if (existingProduct) {
      // If obj exists in itemsToUpdate, updates the qty
      const newItems = itemsToUpdate.map((obj) => {
        if (obj.id === objWithNewQty.id) {
          return { ...obj, newQty: objWithNewQty.newQty };
        }
        return obj;
      });

      setItemsToUpdate(newItems);
    } else {
      // If not, add the obj to itemsToUpdate
      setItemsToUpdate([...itemsToUpdate, objWithNewQty]);
    }
  };

  /**
   * Aux method to setShowForm to false when the cart is updated
   */
  const auxUpdateCart = () => {
    // Update cart 
    updateCart(itemsToUpdate);
    // Disable "Update cart" button
    setIsQtyChanged(false);
    // In case somebody arrived to the form step, disable the form and make the cart summary appear
    setShowForm(false);
  };

  /**
   * Aux method to scroll to form
   */
  const scrollToCheckoutForm = () => {
    if (checkoutFormRef.current) {
      setTimeout(() => {
        checkoutFormRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }, 90);
    }
  };

  // Render
  return (
    <CheckoutView
      cartItems={cartItems}
      shippingTax={shippingTax}
      subtotal={subtotal}
      clearCart={clearCart}
      updateCart={auxUpdateCart}
      isQtyChanged={isQtyChanged}
      setIsQtyChanged={setIsQtyChanged}
      showForm={showForm}
      setShowForm={setShowForm}
      scrollToCheckoutForm={scrollToCheckoutForm}
      token={token}
      setToken={setToken}
      checkoutFormRef={checkoutFormRef}
      auxSetItemsToUpdate={auxSetItemsToUpdate}
    />
  );

};

export default CheckoutContainer;
