// Hooks
import { useEffect, useState } from "react";

// Routing
import { useParams } from "react-router-dom";

// db
import { db } from "../../db/firebase";

// Firestore
import { getDocs, collection, query, where } from "firebase/firestore";

// Services
import { fetchProductsFromFirestore } from "../../api/services/firebaseService";

// Components
import ItemListView from "../ItemListView";



const ItemListContainer = () => {

  // State
  const [products, setProducts] = useState([]);
  
  // Params
  const params = useParams();

  // Effects
  useEffect(() => {
    fetchAllProducts();
    console.log('products', products)
  }, [params.id]);


  // Actions
  const fetchAllProducts = async () => {
    // Collection
    const productsCollection = collection(db, "pictures");

    // Query to filter the products
    let productsQuery;

    if (params.id) {
      // If 'id' param in the URL, apply a filter
      productsQuery = query(productsCollection, where('category', '==', params.id));
    } else {
      // If no 'id' param in the URL, get all the products
      productsQuery = productsCollection;
    }

    // Fetch products from firestore
    try {
      const productsFetched = await fetchProductsFromFirestore(productsQuery);
      console.log('productsFetched', productsFetched);
      setProducts(productsFetched); // Actualiza el estado con los productos
    } catch (error) {
      console.error('An error occurred while getting the products:', error);
    }
  }

  

  // View
  return <ItemListView products={products} />;
};

export default ItemListContainer;
