// Hooks
import { useEffect, useState, useContext } from "react";

// Routing
import { useParams } from "react-router-dom";

// Toaster
import { toast } from "sonner";

// Components
import ItemListView from "../views/ItemListView";

// Context
import { ProductsContext } from "../../api/context/ProductsProvider";

const ItemListContainer = () => {
  // State
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Params
  const params = useParams();

  // Context
  const allProducts = useContext(ProductsContext);

  // Effects
  useEffect(() => {
    auxSetProducts();
  }, [params.id, allProducts]);

  /**
   * Aux method to fetch all the products from the firestore db
   * Filter them by params for the different categories
   */
  const auxSetProducts = () => {
    try {
      // Filter products by size if params.id exists
      if (!params.id) {
        setProducts(allProducts);
      } else {
        const filteredProducts = allProducts.filter((product) =>
          product.categories.includes(params.id)
        );
        setProducts(filteredProducts);
      }
      setError(null); // --> Clean any old error
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    toast.error("There was an error loading the products", {
      style: {
        background: "lightpink",
      },
    });
    console.error("Error fetching products:", error);
  }

  // View
  return <ItemListView products={products} />;
};

export default ItemListContainer;
