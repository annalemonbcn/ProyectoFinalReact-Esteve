import { useState, useEffect } from "react";
import ItemListView from "../Views/ItemListView";
import { ItemsList } from "../../models/Items_list";

function ItemListContainer({ greeting }) {

  // State
  const [data, setData] = useState([]);

  // Effects
  useEffect(() => {
    getItems();
  }, []);

  // Actions
  const getItems = () => {
    /** Api request **/
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => setData(json));
    setTimeout(() => {
      setData(ItemsList)
    }, 2000);
    console.log(ItemsList)
  };

  return <ItemListView data={data} />;
}

export default ItemListContainer
