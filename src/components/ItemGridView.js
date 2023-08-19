// Routing
import { Link } from "react-router-dom";

// Components
import Cart from "./svg/Cart";


const ItemGridView = ({ imgSrc, imgAlt, name, price, id }) => {
    return (
    <div className="w-full md:w-1/2 lg:w-1/3 lg:p-6 box-border hover:scale-110 transition duration-300 ease-in-out itemsContainer">
      <div className="bg-soft-grey w-full h-[400px] p-5 box-border">
        <Link to={`/item/${id}`}>
          <img className="max-h-full mx-auto relative top-1/2 transform -translate-y-1/2" src={imgSrc} alt={imgAlt} />
        </Link>
      </div>

      <div className="pb-5 px-4 mt-5">
        <Link to={`/item/${id}`}>
          <h5 className="text-gray-700 italic ">{name}</h5>
        </Link>
        <div className="flex items-center justify-between mt-6">
          <span className="text-gray-500 font-bold text-lg">{price} €</span>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default ItemGridView;
