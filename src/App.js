// Routing
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Styles
import "./App.css";

// Components
import Navbar from "./components/NavBar/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Backoffice from "./components/pages/Backoffice";
import LoginForm from "./components/forms/LoginForm";

// Context/provider
import ProductsProvider from "./api/context/ProductsProvider";
import CartProvider from "./api/context/CartProvider";

// Toaster
import { Toaster } from "sonner";

// R-suite styles
import "rsuite/dist/rsuite-no-reset.min.css";

// Hooks
import { useState } from "react";

function App() {
  const [isUserAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <Toaster
            position="top-right"
            toastOptions={{ style: { top: "70px" } }}
          />
          <Routes>
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <Navbar />
                  <Main />
                  <Footer />
                </>
              }
            />
            {/* <Route path="/backoffice" element={<Backoffice />} /> */}
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/backoffice"
              element={
                isUserAuthenticated ? (
                  <Backoffice />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
