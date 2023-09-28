// Proptypes
import PropTypes from "prop-types";

// Components
import CheckoutViewRow from "./CheckoutViewRow";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutForm from "../forms/CheckoutForm";
import CheckoutToken from "./CheckoutToken";

const CheckoutView = ({
  cartItems,
  shippingTax,
  subtotal,
  clearCart,
  updateCart,
  isQtyChanged,
  setIsQtyChanged,
  showForm,
  setShowForm,
  scrollToCheckoutForm,
  token,
  setToken,
  checkoutFormRef,
  auxSetItemsToUpdate,
}) => {
  // Render
  if (cartItems.length > 0) {
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
            {cartItems.map((item, i) => {
              if (item.qty > 0) {
                return (
                  <CheckoutViewRow
                    key={i}
                    id={item.productId}
                    imgSrc={item.image}
                    name={item.title}
                    price={item.price}
                    qty={item.qty}
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
                  onClick={updateCart}
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

        <div className="mt-10 w-full">
          <div className="w-full lg:w-1/2">
            {!showForm ? (
              // Cart summary
              <CheckoutSummary
                subtotal={subtotal}
                shippingTax={shippingTax}
                setShowForm={setShowForm}
                scrollToCheckoutForm={scrollToCheckoutForm}
              />
            ) : (
              // Form
              <div ref={checkoutFormRef}>
                <CheckoutForm setToken={setToken} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else if (token) {
    // Token message
    return <CheckoutToken token={token} />;
  } else {
    // Cart empty
    return (
      <div className="xl:px-20">
        <p>Your cart is empty</p>
      </div>
    );
  }
};

CheckoutView.propTypes = {
  cartItems: PropTypes.array.isRequired,
  shippingTax: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
  clearCart: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
  isQtyChanged: PropTypes.bool.isRequired,
  setIsQtyChanged: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
  setShowForm: PropTypes.func.isRequired,
  scrollToCheckoutForm: PropTypes.func.isRequired,
  token: PropTypes.string,
  setToken: PropTypes.func.isRequired,
  checkoutFormRef: PropTypes.object.isRequired,
  auxSetItemsToUpdate: PropTypes.func.isRequired,
};


export default CheckoutView;