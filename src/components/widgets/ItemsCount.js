import { useState } from "react";

const ItemsCount = () => {

  let [qty, setQty] = useState(1)

  const addition = () => {
    setQty(prevQty => prevQty + 1)
  }
  
  const substraction = () => {
    if (qty > 1){
      setQty(prevQty => prevQty - 1)
    }
  }
  
  return (
    <div className="itemsCount flex items-center justify-between gap-3">
      <button className="flex justify-center items-center font-bold text-xl w-[30px]" onClick={substraction}>-</button>
      <p className="w-[20px] text-center">{qty}</p>
      <button className="flex justify-center items-center font-bold text-xl w-[30px]" onClick={addition}>+</button>
    </div>
  );
};

export default ItemsCount;
