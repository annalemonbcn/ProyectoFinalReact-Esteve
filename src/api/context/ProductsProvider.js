// Context
import { createContext, useState, useEffect } from "react"

export const ProductsContext = createContext();
const Provider = ProductsContext.Provider;

// Provider
const ProductsProvider = (props) => {

  // State
  const [products, setProducts] = useState([]);

  // Effects
  useEffect(() => {
    // Realizar la solicitud a la API al cargar el componente
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // useEffect(() => {
  //   console.log("Updated products:", products);
  // }, [products]); // --> demuestra que products tiene valores
  

  return(
    <Provider value={products}>
      {props.children}
    </Provider>
  )
}

export default ProductsProvider;