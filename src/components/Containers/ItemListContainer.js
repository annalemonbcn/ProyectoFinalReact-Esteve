// Hooks
import { useEffect, useState, useContext } from "react";

// Routing
import { useParams } from "react-router-dom";

// Components
import ItemListView from "../views/ItemListView";

// Context
import { ProductsContext } from "../../api/context/ProductsProvider";


const ItemListContainer = () => {
  // State
  const [products, setProducts] = useState([]);

  // Params
  const params = useParams();

  // Context
  const allProducts = useContext(ProductsContext);

  // Effects
  useEffect(() => {
    // Filter products by size if params.id exists
    if (!params.id) {
      setProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter(
        (product) => product.size === params.id
      );
      setProducts(filteredProducts);
    }
  }, [params.id, allProducts]);

  // View
  return <ItemListView products={products} />;
};

export default ItemListContainer;
