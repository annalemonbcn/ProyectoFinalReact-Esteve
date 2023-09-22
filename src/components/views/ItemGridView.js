// Proptypes
import PropTypes from 'prop-types';

// Routing
import { Link } from "react-router-dom";

// Lazyload image
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Components
import CartSvg from "../svg/Cart";


const ItemGridView = ({ imgSrc, imgAlt, name, price, id, orientation }) => {
    return (
    <div className="w-full md:w-1/2 lg:w-1/3 md:px-2 xl:p-6 box-border mb-6 lg:mb-0 lg:hover:scale-110 transition duration-300 ease-in-out itemsContainer">
      <div className="bg-soft-grey w-full h-[400px] p-5 box-border flex justify-center items-center">
        {/* <Link to={`/item/${id}`}>
          <LazyLoadImage 
            className={`mx-auto max-h-[360px] ${orientation === 'square' ? 'max-h-[330px]' : '' }`}
            src={imgSrc}
            alt={imgAlt}
            effect="opacity"
          />
        </Link> */}
      </div>

      <div className="pb-8 xl:pb-5 px-4 mt-4 lg:mt-6">
        <Link to={`/item/${id}`}>
          <h5 className="text-gray-700 italic ">{name}</h5>
        </Link>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <span className="text-gray-500 font-bold text-lg">{price} €</span>
          <Link to={`/item/${id}`}>
            <CartSvg />
          </Link>
        </div>
      </div>
    </div>
  );
};

ItemGridView.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired
};

export default ItemGridView;