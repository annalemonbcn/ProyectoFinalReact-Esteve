// Routing
import { BrowserRouter } from "react-router-dom";

// Styles
import "./App.css";

// Components
import Navbar from "./components/NavBar/NavBar";
import Main from "./components/Main";

// Context/provider
import ProductsProvider from "./api/context/ProductsProvider";
import CartProvider from "./api/context/CartProvider";

// Toaster
import { Toaster } from "sonner";


function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
        <Toaster position="top-right" toastOptions={{ style: { top: '30px' } }} />
          <Navbar />
          <Main />
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
