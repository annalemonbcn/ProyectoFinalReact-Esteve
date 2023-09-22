// Hooks
import { useContext, useRef, useState } from "react";

// Context
import { CartContext } from "../../api/context/CartProvider";
import { ProductsContext } from "../../api/context/ProductsProvider";

// Components
import CheckoutView from "../views/CheckoutView";


const CheckoutContainerNew = () => {

  // Vars
  let cartProductsToPrint;
  let subtotal;
  const shippingTax = 10;

  // Context: cart info
  const { cartItems, updateCart } = useContext(CartContext);

  // Context: all products
  const allProducts = useContext(ProductsContext);

   /**
   * cartProductsToPrint --> array of products to print in the "table"
   * New array with complete info + qty
   */
   cartProductsToPrint = cartItems
   .map((item) => {
     // const product = findProductById(item.productId);
     const product = allProducts.find((product) => product.id === item.productId)
     if (product) {
       return {
         title: product.title,
         image: product.image,
         price: product.price,
         id: product.id,
         qty: item.qty,
       };
     }
     return null;
   })
   .filter((product) => product !== null);

 // Calculate the cart subtotal
 subtotal = cartProductsToPrint.reduce(
   (acc, product) => acc + product.price * product.qty,
   0
 );

  // States


  // Ref
  // const checkoutForm = useRef();



  // const finishOrder = () => {
  //   setShowForm(true);

  //   setTimeout(() => {
  //     checkoutForm.current.scrollIntoView({ behavior: "smooth" });
  //   }, 10);
  // };

  // Render
  
  return(
    <CheckoutView products={cartProductsToPrint} subtotal={subtotal} shippingTax={shippingTax} />
  )
};

export default CheckoutContainerNew;
