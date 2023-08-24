// Hooks
import { useEffect, useState, useContext } from "react";

// Routing
import { useParams } from "react-router-dom";

// Components
import ItemListView from "../ItemListView";

// Context
import { ProductsContext } from "../../api/context/ProductsProvider";


const ItemListContainer = () => {

  // Context
  const productsFromContext  = useContext(ProductsContext);
  console.log(productsFromContext)  
  
  // State
  const [products, setProducts] = useState([]);

  // Params
  const result = useParams();
  

  // Effects
  useEffect(() => {
    // setProducts(productsFromContext)

    if (result.id) {
      // Filter products by category if result.id exists
      const filteredData = productsFromContext.filter(
        (product) => product.category === result.id
      );
      setProducts(filteredData);
    } else {
      setProducts(productsFromContext);
    }
  }, [result.id, productsFromContext]);


  // View
  return <ItemListView products={products} />;
};

export default ItemListContainer;
