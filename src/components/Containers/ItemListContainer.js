// Hooks
import { useEffect, useState, useContext } from "react";

// Routing
import { useParams } from "react-router-dom";

// Components
import ItemListView from "../ItemListView";

// Context
import { ProductsContext } from "../../api/context/ProductsProvider";



const ItemListContainer = () => {

  // State
  const [products, setProducts] = useState([]);

  // Context
  const allProducts  = useContext(ProductsContext);
  
  // Params
  const params = useParams();

  // Effects
  useEffect(() => {
    if (!params.id) {
      setProducts(allProducts);
    } else {
      // Filter products by category if result.id exists
      const filteredProducts = allProducts.filter(
        (product) => product.category === params.id
      );
      setProducts(filteredProducts);
    }
  }, [params.id, allProducts]);


  // View
  return <ItemListView products={products} />;
};

export default ItemListContainer;
