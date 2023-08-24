// Routing
import { BrowserRouter } from "react-router-dom";

// Styles
import "./App.css";

// Components
import Navbar from "./components/NavBar/NavBar";
import Main from "./components/Main";

// Context/provider
import ProductsProvider from "./api/context/ProductsProvider";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Navbar />
        <Main />
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
