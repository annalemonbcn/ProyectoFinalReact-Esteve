// Routing
import { NavLink } from "react-router-dom";
import CartWidget from "./widgets/CartWidget";

const Header = () => {
  return (
    <header className="relative flex items-center justify-center my-8">
      <NavLink to="/">
        <h1 className="text-2xl md:text-3xl">lemoninfilm</h1>
      </NavLink>
      <CartWidget />
    </header>
  );
};

export default Header;
