// Routing
import { Link } from "react-router-dom";

const CheckoutRow = ({ imgSrc, name, price, qty, id, setIsQtyChangedTrue }) => {

  const handleQtyChange = (e) => {
    
    const newQty = e.target.value;
    
    console.log(`El usuario ha modificado la cantidad para el ID: ${id}. La nueva cantidad es ${newQty}`);

    // Set isQtyChanged state from parent to true
    setIsQtyChangedTrue();
  };


  return (
    <>
      <div className="hidden lg:block">
      <Link to={`/item/${id}`}>
        <img
          className="w-auto max-w-[200px] h-32 object-contain mx-auto"
          src={imgSrc}
          alt="Product"
        />
      </Link>
      </div>
      <div className="flex col-span-2 lg:col-span-1 items-center px-4">{name}</div>
      <div className="flex items-center justify-center">{price} €</div>
      <input 
        type="number" 
        min="0" 
        defaultValue={qty} 
        className="self-center justify-self-center text-center border border-slate-700 rounded-sm w-14 h-8"
        onChange={handleQtyChange}  
      />
      <div className="flex items-center justify-center total">{price  * qty} €</div>
      <div className="col-span-5 border-t border-slate-200 gap-0"></div>
    </>
  );
};

export default CheckoutRow;
