const CheckoutRow = ({ imgSrc, name, price, qty }) => {
  return (
    <>
      <div>
        <img
          className="w-auto max-w-[200px] h-32 object-contain mx-auto"
          src={imgSrc}
          alt="Product"
        />
      </div>
      <div className="flex items-center px-4">{name}</div>
      <div className="flex items-center justify-center">{price} €</div>
      <div className="flex items-center justify-center">{qty}</div>
      <div className="flex items-center justify-center total">{price  * qty} €</div>
      <div className="col-span-5 border-t border-slate-200"></div>
    </>
  );
};

export default CheckoutRow;
