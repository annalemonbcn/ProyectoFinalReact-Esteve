// Hooks
import { useState, useEffect } from "react";

// Routing
import { useParams } from "react-router-dom";

// Components
import ItemDetailView from "../ItemDetailView";


const ItemDetailContainer = () => {

  // State
  const [product, setProduct] = useState({});
  const result = useParams();

   // Effects
   useEffect(() => {
    getProduct();
  }, [result.id]);

  // Actions
  const getProduct = () => {
    fetch(`https://fakestoreapi.com/products/${result.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }

  // View
  return <ItemDetailView data={product} />;
};

export default ItemDetailContainer;
