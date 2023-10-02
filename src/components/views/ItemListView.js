// Proptypes
import PropTypes from "prop-types";

// Loader
import { Loader } from "rsuite";

// Components
import ItemGridView from "./ItemGridView";


function ItemListView({ products }) {
  return (
    <>
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
