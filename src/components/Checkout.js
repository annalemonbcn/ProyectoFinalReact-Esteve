// Hooks
import { useContext, useRef, useState } from "react";

// Context
import { CartContext } from "../api/context/CartProvider";
import { ProductsContext } from "../api/context/ProductsProvider";

// Components
import CheckoutRow from "../views/CheckoutRow";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  // State
  const [isQtyChanged, setIsQtyChanged] = useState(false); // --> did the user modified the qty?
  const [itemsToUpdate, setItemsToUpdate] = useState([]); // --> products that the user modified that needs to be updated
  const [showForm, setShowForm] = useState(false);
  const [token, setToken] = useState(null);

  // Context: cart info
  const { cartItems, clearCart, updateCart } = useContext(CartContext);

  // Context: all products
  const allProducts = useContext(ProductsContext);

  // Ref
  const checkoutForm = useRef();

  // Vars
  let cartProductsToPrint;
  let subtotal;
  const shippingTax = 10;

  // Find product by id in allProducts array
  const findProductById = (id) => {
    return allProducts.find((product) => product.id === id);
  };

  /**
   * cartProductsToPrint --> array of products to print in the "table"
   * New array with complete info + qty
   */
  cartProductsToPrint = cartItems
    .map((item) => {
      const product = findProductById(item.productId);
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
      // If obj exists, updates the qty
      const newItems = itemsToUpdate.map((obj) => {
        if (obj.id === objWithNewQty.id) {
          return { ...obj, newQty: objWithNewQty.newQty };
        }
        return obj;
      });

      setItemsToUpdate(newItems);
    } else {
      setItemsToUpdate([...itemsToUpdate, objWithNewQty]);
    }
  };

  const finishOrder = () => {
    setShowForm(true);

    setTimeout(() => {
      checkoutForm.current.scrollIntoView({ behavior: "smooth" });
    }, 10);
  };

  // Render
  if (cartItems.length > 0 && !token) {
    return (
      <div className="xl:px-20">
        <h1 className="text-2xl font-bold w-full border-b border-slate-900">
          Checkout
        </h1>
        {/* Table */}
        <div className="w-full mt-8 lg:mt-16 border border-slate-200 rounded">
          {/* Titles */}
          <div className="grid grid-cols-5 lg:gap-y-4 gap-y-8">
            <div className="col-span-2 font-bold p-1 lg:p-3 px-4">Product</div>
            <div className="font-bold p-1 lg:p-3 text-center">Price</div>
            <div className="font-bold p-1 lg:p-3 text-center">Quantity</div>
            <div className="font-bold p-1 lg:p-3 text-center">Total</div>
            <div className="col-span-5 border-t border-slate-200 mt-[-25px] lg:mt-[-15px]"></div>

            {/* Products rows */}
            {cartProductsToPrint.map((product, i) => {
              if (product.qty > 0) {
                return (
                  <CheckoutRow
                    key={i}
                    id={product.id}
                    imgSrc={product.image}
                    name={product.title}
                    price={product.price}
                    qty={product.qty}
                    setIsQtyChanged={setIsQtyChanged}
                    auxSetItemsToUpdate={auxSetItemsToUpdate}
                  />
                );
              }
              return null;
            })}

            {/* Buttons  */}
            <div className="lg:col-span-3"></div>
            <div className="col-span-4 lg:col-span-2 flex justify-end items-center px-4">
              {isQtyChanged ? (
                <button
                  onClick={() => updateCart(itemsToUpdate)}
                  className="text-sm font-bold border border-black rounded-lg bg-white px-3 py-1.5 mb-4 mr-4"
                >
                  Update cart
                </button>
              ) : null}
              <button
                onClick={clearCart}
                className="text-sm font-bold border border-black rounded-lg  bg-white px-3 py-1.5 mb-4"
              >
                Empty cart
              </button>
            </div>
          </div>
        </div>

        {/* Cart summary  */}
        {!showForm && !token ? (
          <div className="mt-10 w-full">
            {/* Total summary */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold border-b border-slate-900">
                Total
              </h2>
              <div className="mt-4">
                <div className="flex items-center justify-start">
                  <p className="font-bold min-w-[100px] lg:min-w-[80px]">
                    Subtotal:
                  </p>
                  <p className="font-normal ml-6">{subtotal} €</p>
                </div>
                <div className="flex items-center justify-start">
                  <p className="font-bold min-w-[100px] lg:min-w-[80px]">
                    Shipping:
                  </p>
                  <p className="font-normal ml-6">{shippingTax} €</p>
                </div>
                <div className="flex items-center justify-start">
                  <p className="font-bold min-w-[100px] lg:min-w-[80px]">
                    Total:
                  </p>
                  <p className="font-normal ml-6">{subtotal + 10} €</p>
                </div>
              </div>
              <button
                onClick={finishOrder}
                className="bg-black text-white font-bold w-full uppercase px-5 py-2.5 mt-6"
              >
                Finish order
              </button>
            </div>
          </div>
        ) : null}

        {/* Form */}
        {showForm && !token ? (
          <div className="mt-10 w-full">
            <div className="w-full lg:w-1/2">
              <div ref={checkoutForm}>
                <CheckoutForm setToken={setToken} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  } else if (cartItems.length === 0 && token) {
    return (
      <div className="xl:px-20">
        <h3 className="font-bold text-2xl">Thank you for your order!</h3>
        <p className="mt-4">
          We have received your request and it will be processed shortly.
        </p>
        <p>You will shortly receive an email with a summary of your order.</p>
        <p>Please, for changes or cancellations, keep this purchase ID.</p>
        <p className="mt-4">
          <span className="font-bold">Purchase ID:</span> {token}
        </p>
      </div>
    );
  } else if (cartItems.length === 0) {
    return (
      <div className="xl:px-20">
        <p>Your cart is empty</p>;
      </div>
    )
}
};

export default Checkout;
