// Proptypes
import PropTypes from "prop-types";

// Loader
import { Loader } from "rsuite";

// Components
import ItemGridView from "./ItemGridView";

// Routing
import { NavLink } from "react-router-dom";

function ItemListView({ products }) {
  return (
    <>
      <h2 className="font-bold text-2xl text-center">Market</h2>
      <ul className="flex items-center justify-center gap-4 my-8">
        <li className="filter-nav">
          <NavLink to="/">
            All
          </NavLink>
        </li>
        <li>/</li>
        <li className="filter-nav">
          <NavLink to="/category/35mm">
            35mm
          </NavLink>
        </li>
        <li>/</li>
        <li className="filter-nav">
          <NavLink to="/category/120">
            120
          </NavLink>
        </li>
      </ul>
      <div className="flex flex-row flex-wrap">
        {products.length === 0 ? (
          <Loader content="Loading products..." />
        ) : (
          products.map((product, i) => {
            return (
              <ItemGridView
                key={i}
                imgSrc={product.image}
                imgAlt={product.title}
                name={product.title}
                price={product.price}
                id={product.id}
                orientation={product.orientation}
              />
            );
          })
        )}
      </div>
    </>
  );
}

ItemListView.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ItemListView;
