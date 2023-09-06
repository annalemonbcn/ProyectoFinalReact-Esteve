// Hooks
import { useEffect, useState } from "react";

// Routing
import { useParams } from "react-router-dom";

// Components
import ItemListView from "../ItemListView";

const ItemListContainer = () => {
  // State
  const [data, setData] = useState([]);
  const { id } = useParams();

  // Effects
  useEffect(() => {
    fetchData();
  }, [id]);

  // Actions
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();

      if (id) {
        // Filter products by category if id exists
        const filteredData = json.filter(
          (product) => product.category === id
        );
        setData(filteredData);
      } else {
        setData(json);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // View
  return <ItemListView data={data} />;
};

export default ItemListContainer;
