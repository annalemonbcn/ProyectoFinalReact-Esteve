// Firestore
import { getDocs } from "firebase/firestore";

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

}

export const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred while fetching products:", error);
    throw error;
  }
}
