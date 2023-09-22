// Hooks
import { useState, useContext, useRef } from "react";

// Context
import { CartContext } from "../../api/context/CartProvider";

// Components
import CheckoutRow from "./CheckoutViewRow";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutForm from "../forms/CheckoutForm";

const CheckoutView = ({ products, subtotal, shippingTax }) => {

  // Ref
  const checkoutFormRef = useRef();

  //State
  const [isQtyChanged, setIsQtyChanged] = useState(false); // --> did the user modified the qty?
  const [itemsToUpdate, setItemsToUpdate] = useState([]); // --> products that the user modified that needs to be updated
  const [showForm, setShowForm] = useState(false);
  const [token, setToken] = useState(null);

  // Context: cart info
  const { clearCart, updateCart } = useContext(CartContext);

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

  const auxUpdateCart = () => {
    updateCart(itemsToUpdate);
    setShowForm(false)
  }

  const scrollToCheckoutForm = () => {
    if (checkoutFormRef.current) {
      setTimeout(() => {
        checkoutFormRef.current.scrollIntoView({
          behavior: 'smooth',
        });
      }, 10);
    }
  };


  // Render
  if (products.length > 0) {
    return (
      <div className="xl:px-20">
        <h1 className="text-2xl font-bold w-full border-b border-slate-900">
          Checkout
        </h1>

        {/* Table */}
        <div className="w-full mt-8 lg:mt-16 border border-slate-200 rounded">
          {/* Titles */}
          <div className="grid grid-cols-5 lg:gap-y-4 gap-y-8">
            <div className="col-span-2 font-bold p-1 lg:p-3 px-4">
              Product
            </div>
            <div className="font-bold p-1 lg:p-3 text-center">Price</div>
            <div className="font-bold p-1 lg:p-3 text-center">Quantity</div>
            <div className="font-bold p-1 lg:p-3 text-center">Total</div>
            <div className="col-span-5 border-t border-slate-200 mt-[-25px] lg:mt-[-15px]"></div>

            {/* Products rows */}
            {products.map((product, i) => {
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
                  onClick={auxUpdateCart}
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

        {!showForm ? (
          // Cart summary
          <div className="mt-10 w-full">
            <div className="w-full lg:w-1/2">
              <CheckoutSummary
                subtotal={subtotal}
                shippingTax={shippingTax}
                setShowForm={setShowForm}
                scrollToCheckoutForm={scrollToCheckoutForm}
              />
            </div>
          </div>
        ) : (
          // Form
          <div className="mt-10 w-full">
            <div className="w-full lg:w-1/2">
              <div ref={checkoutFormRef}>
                <CheckoutForm setToken={setToken} />
              </div>
            </div>
          </div>
        )}         
      </div>
    );
  } else if (token) {
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
  } else {
    return (
      <div className="xl:px-20">
        <p>Your cart is empty</p>
      </div>
    );
  }
};

export default CheckoutView;
