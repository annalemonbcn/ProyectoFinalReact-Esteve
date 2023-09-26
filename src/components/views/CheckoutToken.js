const CheckoutToken = ({ token }) => {
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
};

export default CheckoutToken;
