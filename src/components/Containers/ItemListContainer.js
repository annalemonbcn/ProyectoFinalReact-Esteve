// Hooks
import { useEffect, useState } from "react";

// Routing
import { useParams } from "react-router-dom";

// Components
import ItemListView from "../ItemListView";


const ItemListContainer = () => {
  // State
  const [data, setData] = useState([]);
  const result = useParams();

  // Effects
  useEffect(() => {
    if (result.id) {
      getProductsByCategory();
    } else {
      getAllProducts();
    }
  }, [result.id]);

  // Actions
  const getAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  const getProductsByCategory = () => {
    fetch(`https://fakestoreapi.com/products/category/${result.id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  // View
  return <ItemListView data={data} />;
};

export default ItemListContainer;
