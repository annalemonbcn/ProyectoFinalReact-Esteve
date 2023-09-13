// Services
import { fetchProductsFromFirestore } from "../services/firebaseService"

// db
import { db } from "../../db/firebase";

// Firestore
import { collection, query, where } from "firebase/firestore";


// Context
import { createContext, useState, useEffect, useParams } from "react"
export const ProductsContext = createContext();


// Provider for api
// const ProductsProvider = (props) => {

//   // State
//   const [products, setProducts] = useState([]);

//   // Effects
//   useEffect(() => {
//     fetchData();
//   }, []);

//   // useEffect(() => {
//   //   console.log("Updated products:", products);
//   // }, [products]); // --> demuestra que products tiene valores
  
//   // Actions
//   const fetchData = async () => {
//     try {
//       const data = await fetchProducts();
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };


//   return(
//     <ProductsContext.Provider value={products}>
//       {props.children}
//     </ProductsContext.Provider>
//   )
// }

const ProductsProvider = (props) => {
  // State
  const [products, setProducts] = useState([]);

  // Params
  const params = useParams();  

  // Effects
  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("Updated products:", products);
  // }, [products]); // --> demuestra que products tiene valores
  
  // Actions
  const fetchData = async () => {
    // Collection
    const picturesCollection = collection(db, "pictures");

    // Query to filter the products
    let productsQuery;

    // Set query if params
    if (params.id) {
      // If 'id' param in the URL, apply a filter
      productsQuery = query(picturesCollection, where('size', '==', params.id));
    } else {
      // If no 'id' param in the URL, get all the products
      productsQuery = picturesCollection;
    }

    // Fetch products from firestore
    try {
      const data = await fetchProductsFromFirestore(productsQuery);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  return(
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider;