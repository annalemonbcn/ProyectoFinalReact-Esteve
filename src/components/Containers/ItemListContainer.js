import { useState, useEffect } from "react";
import ItemListView from "../Views/ItemListView";

function ItemListContainer({ greeting }) {

  // State
  const [data, setData] = useState([]);

  // Effects
  useEffect(() => {
    getItems();
  }, []);

  // Actions
  const getItems = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  return <ItemListView data={data} />;
}

export default ItemListContainer
