// Routing
import { Routes, Route } from "react-router-dom";

// Components
import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import CheckoutContainer from "./Containers/CheckoutContainer";
import About from "./pages/About";


const Main = () => {

  return (
    <main className="px-5 xl:px-20 mb-16 lg:mb-4">
       <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<CheckoutContainer />} />
      </Routes>
    </main>
  );
}

export default Main;