// Routing
import { Link } from "react-router-dom";

// Hooks
import { useRef } from "react";


const CheckoutRow = ({ imgSrc, name, price, qty, id, setIsQtyChanged,  auxSetItemsToUpdate }) => {

  // UseRef
  const qtyRef = useRef(null)

  // onChange --> if user modify the qty
  const handleQtyChange = () => {

    // Get the new value
    const newQty = qtyRef.current.value
    
    // set the product updated
    const productUpdated = {
      id,
      newQty
    }  
    auxSetItemsToUpdate(productUpdated)

    // Set isQtyChanged state from parent to true --> to make the button appear
    setIsQtyChanged(true);
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
      <div className="flex col-span-2 lg:col-span-1 items-center px-4">
        <Link to={`/item/${id}`}>
          {name}
        </Link>
      </div>
      <div className="flex items-center justify-center">{price} €</div>
      <input 
        type="number" 
        min="0" 
        defaultValue={qty}
        className="self-center justify-self-center text-center border border-slate-700 rounded-sm w-14 h-8"
        ref={qtyRef}
        onChange={handleQtyChange}  
      />
      <div className="flex items-center justify-center total">{price  * qty} €</div>
      <div className="col-span-5 border-t border-slate-200 gap-0"></div>
    </>
  );
};

export default CheckoutRow;
