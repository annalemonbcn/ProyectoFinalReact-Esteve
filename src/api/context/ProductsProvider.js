// Services
import { fetchProducts } from "../services/apiService"

// Context
import { createContext, useState, useEffect } from "react"
export const ProductsContext = createContext();


// Provider
const ProductsProvider = (props) => {

  // State
  const [products, setProducts] = useState([]);

  // Effects
  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("Updated products:", products);
  // }, [products]); // --> demuestra que products tiene valores
  
  // Actions
  const fetchData = async () => {
    try {
      const data = await fetchProducts();
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