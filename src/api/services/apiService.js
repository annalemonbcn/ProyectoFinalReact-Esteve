export const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred while fetching products:", error);
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
