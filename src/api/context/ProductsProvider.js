// Services
import { fetchProductsFromFirestore } from "../services/firebaseService";

// firestore
import { db } from "../../db/firebase";
import { collection } from "firebase/firestore";

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
      
    } catch (error) {
      throw error;
    }
  };

  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
