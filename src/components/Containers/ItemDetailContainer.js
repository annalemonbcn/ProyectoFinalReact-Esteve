// Hooks
import { useState, useEffect, useContext } from "react";

// Routing
import { useParams } from "react-router-dom";

// Components
import ItemDetailView from "../ItemDetailView";

// Services
import { fetchSingleProduct } from "../../api/services/apiService";

// Context
import { ProductsContext } from "../../api/context/ProductsProvider";

const ItemDetailContainer = () => {
  // State
  const [product, setProduct] = useState({});
  const params = useParams();

  // Context
  const allProducts = useContext(ProductsContext);
  console.log(allProducts)


  // Effects
  useEffect(() => {
    // fetchData(); // --> Petición fetch para un solo producto
    
    // Filter product in the array of products
    const selectedProduct = allProducts.find(
      (product) => product.id === parseInt(params.id)
    );
    setProduct(selectedProduct)
  }, [params.id, allProducts]);

  // Actions
  /** Peticion fetch para un solo producto */
  // const fetchData = async () => {
  //   try {
  //     const data = await fetchSingleProduct(params.id);
  //     setProduct(data);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  // View
  return <ItemDetailView product={product} />;
};

export default ItemDetailContainer;
