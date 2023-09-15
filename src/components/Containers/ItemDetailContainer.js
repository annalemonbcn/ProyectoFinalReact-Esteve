// Hooks
import { useState, useEffect } from "react";

// Routing
import { useParams } from "react-router-dom";

// Services
import { fetchSingleProductFromFirebase } from "../../api/services/firebaseService";

// db
import { db } from "../../db/firebase";

// Firestore
import { doc, collection } from "firebase/firestore";

// Toaster
import { toast } from "sonner";

// Components
import ItemDetailView from "../views/ItemDetailView";

const ItemDetailContainer = () => {
  // State
  const [product, setProduct] = useState({});

  // Params
  const params = useParams();

  // Effects
  useEffect(() => {
    getSingleProduct();
  }, [params.id]);

  /**
   * Aux method to fetch a single product from the firestore db
   */
  const getSingleProduct = async () => {
    try {
      // Collection
      const picturesCollection = collection(db, "pictures");

      // Create docRef
      const docRef = doc(picturesCollection, params.id);

      // Fetch product from firestore
      const fetchedProduct = await fetchSingleProductFromFirebase(
        docRef,
        params.id
      );
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
