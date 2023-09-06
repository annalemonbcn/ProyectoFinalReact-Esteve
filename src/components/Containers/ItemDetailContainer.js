// Hooks
import { useState, useEffect, useContext } from "react";

// Routing
import { useParams } from "react-router-dom";

// Components
import ItemDetailView from "../ItemDetailView";

// Services
import { fetchSingleProduct } from "../../api/services/apiService";


const ItemDetailContainer = () => {

  // State
  const [product, setProduct] = useState({});
  const params = useParams();

  
  // Effects
  useEffect(() => {
     fetchData(); // --> Petición fetch para un solo producto
  }, [params.id]);

  // Actions
  /** Peticion fetch para un solo producto */
  const fetchData = async () => {
    try {
      const data = await fetchSingleProduct(params.id);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // View
  return <ItemDetailView product={product} />;
};

export default ItemDetailContainer;
