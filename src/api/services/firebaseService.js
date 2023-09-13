// Firestore
import { getDocs, getDoc } from "firebase/firestore";

export const fetchProductsFromFirestore = async (productsQuery) => {
  try {
    const allDocs = await getDocs(productsQuery);
    const aux = allDocs.docs.map((doc) => {
      const product = doc.data();
      product.id = doc.id;
      return product;
    });
    return aux;
  } catch (error) {
    throw error;
  }
};

export const fetchSingleProductFromFirebase = async (docRef, id) => {
  try {
    const docSnap = await getDoc(docRef);
    const product = docSnap.data();
    product.id = id;
    return product;
  } catch (error) {
    throw error;
  }
};
