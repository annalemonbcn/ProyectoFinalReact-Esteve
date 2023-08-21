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
    fetchData();
  }, [result.id]);

  // Actions
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();

      if (result.id) {
        // Filter products by category if result.id exists
        const filteredData = json.filter(
          (product) => product.category === result.id
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
