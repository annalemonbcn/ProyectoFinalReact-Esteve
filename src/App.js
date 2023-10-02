// Routing
import { BrowserRouter } from "react-router-dom";

// Styles
import "./App.css";

// Components
import Navbar from "./components/NavBar/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Context/provider
import ProductsProvider from "./api/context/ProductsProvider";
import CartProvider from "./api/context/CartProvider";

// Toaster
import { Toaster } from "sonner";

// R-suite styles
import 'rsuite/dist/rsuite-no-reset.min.css';


function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <Toaster position="top-right" toastOptions={{ style: { top: '70px' } }} />
          <Header />
          <Navbar />
          <Main />
          <Footer />
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
