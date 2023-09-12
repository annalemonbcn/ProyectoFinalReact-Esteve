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

// Toaster
import { toast } from "sonner";

// Components
import ItemListView from "../ItemListView";



const ItemListContainer = () => {

  // State
  const [products, setProducts] = useState([]);
  
  // Params
  const params = useParams();

  // Effects
  useEffect(() => {
    getAllProducts();
    console.log('products', products)
  }, [params.id]);


  // Actions
  /**
   * Fetch all products from firestore db
   */
  const getAllProducts = async () => {
    // Collection
    const picturesCollection = collection(db, "pictures");

    // Query to filter the products
    let productsQuery;

    if (params.id) {
      // If 'id' param in the URL, apply a filter
      productsQuery = query(picturesCollection, where('category', '==', params.id));
    } else {
      // If no 'id' param in the URL, get all the products
      productsQuery = picturesCollection;
    }

    // Fetch products from firestore
    try {
      const productsFetched = await fetchProductsFromFirestore(productsQuery);
      console.log('productsFetched', productsFetched);
      setProducts(productsFetched);
      // Toast
      toast.success("Products loaded! Welcome :)", {
        style: {
          background: "aquamarine",
        }
      });
    } catch (error) {
      toast.error(
        `An error occurred while loading the products: ${error}`,
        {
          style: {
            background: "lightpink",
          },
        }
      );
    }
  }

  

  // View
  return <ItemListView products={products} />;
};

export default ItemListContainer;
