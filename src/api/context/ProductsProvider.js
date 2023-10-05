// Services
import { fetchProductsFromFirestore } from "../services/firestoreService";

// firestore
import { db } from "../../db/firebase";
import { collection } from "firebase/firestore";

// Toaster
import { toast } from "sonner";

// Context
import { createContext, useState, useEffect } from "react";
export const ProductsContext = createContext();

// Provider
const ProductsProvider = (props) => {
  // State
  const [products, setProducts] = useState([]);

  // Effects
  useEffect(() => {
    fetchData();
  }, []);

  /**
   * fetchData *
   * aux method to fetch data from firebase
   */
  const fetchData = async () => {
    const productsCollection = collection(db, "pictures");
    try {
      const data = await fetchProductsFromFirestore(productsCollection);
      setProducts(data);
      toast.success("Products loaded :)", {
        style: {
          background: "aquamarine",
        },
      });
    } catch (error) {
      toast.error("There was an error loading the products", {
        style: {
          background: "lightpink",
        },
      });
      console.error("Error fetching products:", error);
    }
  };

  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
