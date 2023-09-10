// Routing
import { Routes, Route } from "react-router-dom";

// Components
import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import Checkout from "./Checkout";
// import About from "./About";

const Main = () => {

  return (
    <main className="px-5 lg:px-20 pt-5 lg:pt-16 mt-[70px]">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </main>
  );
}

export default Main;