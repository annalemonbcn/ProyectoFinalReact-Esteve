// Routing
import { BrowserRouter } from "react-router-dom";

// Styles
import "./App.css";

// Components
import Navbar from "./components/NavBar/NavBar";
import Main from "./components/Main";

// Context/provider
import ProductsProvider from "./api/context/ProductsProvider";
import CheckoutProvider from "./api/context/CheckoutProvider";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CheckoutProvider>
          <Navbar />
          <Main />
        </CheckoutProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
