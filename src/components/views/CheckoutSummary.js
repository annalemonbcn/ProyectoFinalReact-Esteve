const CheckoutSummary = ({ subtotal, shippingTax, setShowForm, scrollToCheckoutForm }) => {
  const finishOrder = () => {
    setShowForm(true);
    scrollToCheckoutForm();
  };

  return (
    <>
      <h2 className="text-2xl font-bold border-b border-slate-900">Total</h2>
      <div className="mt-4">
        <div className="flex items-center justify-start">
          <p className="font-bold min-w-[100px] lg:min-w-[80px]">Subtotal:</p>
          <p className="font-normal ml-6">{subtotal} €</p>
        </div>
        <div className="flex items-center justify-start">
          <p className="font-bold min-w-[100px] lg:min-w-[80px]">Shipping:</p>
          <p className="font-normal ml-6">{shippingTax} €</p>
        </div>
        <div className="flex items-center justify-start">
          <p className="font-bold min-w-[100px] lg:min-w-[80px]">Total:</p>
          <p className="font-normal ml-6">{subtotal + 10} €</p>
        </div>
      </div>
      <button
        onClick={finishOrder}
        className="bg-black text-white font-bold w-full uppercase px-5 py-2.5 mt-6"
      >
        Finish order
      </button>
    </>
  );
};

export default CheckoutSummary;
