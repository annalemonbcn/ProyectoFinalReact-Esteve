// Hooks
import { useState, useEffect, useContext } from "react";

// Routing
import { useParams } from "react-router-dom";

// Toaster
import { toast } from "sonner";

// Components
import ItemDetailView from "../views/ItemDetailView";

// Context
import { ProductsContext } from "../../api/context/ProductsProvider";


const ItemDetailContainer = () => {
  // State
  const [product, setProduct] = useState({});

  // Params
  const { id } = useParams();

  // Context
  const { fetchSingleProduct } = useContext(ProductsContext);

  // Effects
  useEffect(() => {
    auxFetchSingleProduct();
  }, [id]);

  /**
   * Aux method to fetch a single product from the firestore db
   */
  const auxFetchSingleProduct = async () => {
    try {
      const fetchedProduct = await fetchSingleProduct(id);
      setProduct(fetchedProduct);
    } catch (error) {
      toast.error("An error occurred while loading the product info", {
        style: {
          background: "lightpink",
        },
      });
      console.error("Error loading product:", error);
    }
  };

  // View
  return <ItemDetailView product={product} />;
};

export default ItemDetailContainer;
