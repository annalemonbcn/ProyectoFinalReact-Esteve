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

  // Params
  const { id } = useParams();

  // Context
  const { fetchProducts } = useContext(ProductsContext);

  // Effects
  useEffect(() => {
    auxSetProducts();
  }, [id]);

  /**
   * Aux method to fetch all the products from the firestore db
   * Filter them by params for the different categories
   */
  const auxSetProducts = async () => {
    try {
      const allProducts = await fetchProducts();
      // Filter products by size if params.id exists
      if (!id) {
        setProducts(allProducts);
      } else {
        const filteredProducts = allProducts.filter((product) =>
          product.categories.includes(id)
        );
        setProducts(filteredProducts);
      }
    } catch (error) {
      toast.error("There was an error loading the products", {
        style: {
          background: "lightpink",
        },
      });
      console.error("Error fetching products:", error);
    }
  };

  // View
  return <ItemListView products={products} />;
};

export default ItemListContainer;
