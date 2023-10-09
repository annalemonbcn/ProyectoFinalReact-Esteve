// Services
import {
  fetchProductsFromFirestore,
  fetchSingleProductFromFirestore,
} from "../services/firestoreService";

// firestore
import { db } from "../../db/firebase";
import { doc, collection } from "firebase/firestore";

// Context
import { createContext, useState } from "react";
export const ProductsContext = createContext();

// Provider
const ProductsProvider = (props) => {
  // State
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  /**
   * * fetchProducts *
   * Method to fetch data from firebase
   * @returns data --> all products from firestore collection "pictures"
   */
  const fetchProducts = async () => {
    const productsCollection = collection(db, "pictures");
    try {
      const data = await fetchProductsFromFirestore(productsCollection);
      setProducts(data);
      return data;
    } catch (error) {
      throw error;
    }
  };

  /**
   * * fetchSingleProduct *
   * Method to fetch the data from a single product from firebase
   * @param {*} id --> product to fetch by id
   * @returns fetchedProduct -->single product from firestore collection "pictures"
   */
  const fetchSingleProduct = async (id) => {
    const productsCollection = collection(db, "pictures");
    try {
      // Create docRef
      const docRef = doc(productsCollection, id);

      // Fetch product from firestore
      const fetchedProduct = await fetchSingleProductFromFirestore(docRef, id);
      setProduct(fetchedProduct);
      return fetchedProduct;
    } catch (error) {
      throw error;
    }
  };

  const contextValue = {
    fetchProducts,
    fetchSingleProduct
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
