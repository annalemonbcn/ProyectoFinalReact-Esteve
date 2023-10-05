// Firestore
import { getDocs, getDoc, addDoc } from "firebase/firestore";

/**
 * fetchProductsFromFirestore *
 * Fetch request to firestore service to get all the products
 * @param {*} productsQuery 
 * @returns aux --> array with product info + product.id merged
 */
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

/**
 * fetchSingleProductFromFirebase *
 * Fetch request to firestore service to get a single product
 * @param {*} docRef 
 * @param {*} id 
 * @returns product with info
 */
export const fetchSingleProductFromFirestore = async (docRef, id) => {
  try {
    const docSnap = await getDoc(docRef);
    const product = docSnap.data();
    product.id = id;
    return product;
  } catch (error) {
    throw error;
  }
};

/**
 * addDocToFirebase *
 * Add a doc into orders collection
 * @param {*} collection 
 * @param {*} order 
 * @returns tokenId from firebase
 */
export const addDocToFirestore = async (collection, order) => {
  try {
    const docRef = await addDoc(collection, order);
    return docRef.id;
  } catch (error) {
    throw error;
  }
}