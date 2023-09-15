// Routing
import { Routes, Route } from "react-router-dom";

// Components
import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import Checkout from "./Checkout";

const Main = () => {

  return (
    <main className="px-5 xl:px-20 pt-16 lg:pt-16 mt-[50px] lg:mt-[70px] mb-16 lg:mb-4">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </main>
  );
}

export default Main;