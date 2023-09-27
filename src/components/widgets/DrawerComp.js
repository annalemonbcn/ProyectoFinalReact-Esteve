// Hooks
import { useContext } from "react";

// Rsuite
import { Drawer } from "rsuite";

// Context
import { CartContext } from "../../api/context/CartProvider";

const DrawerComp = ({ open, setIsDrawerOpen }) => {

  let size = "xs";

  const { cartItems, goToCart } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );

  return (
    <Drawer open={open} size={window.innerWidth >= 768 ? "xs" : "full"} onClose={() => setIsDrawerOpen(false)}>
      <Drawer.Header>
        <Drawer.Title>Summary</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        {/* Header  */}
        <div className="font-bold text-lg">
          🎉 Product(s) successfully added to cart!
        </div>
        {/* Buttons */}
        <div className="flex items-center gap-2 justify-center mt-4">
          <button
            className="border-slate-500 border-solid border py-1 px-2 rounded hover:bg-slate-50"
            onClick={goToCart}
          >
            View cart
          </button>
          <button
            className="border-slate-500 border-solid border py-1 px-2 rounded hover:bg-slate-50"
            onClick={() => setIsDrawerOpen(false)}
          >
            Keep looking
          </button>
        </div>
        {/* Product list */}
        <p className="font-bold border-b border-slate-500 text-gray-500 mt-10">
          Cart summary
        </p>
        <ul className="max-w-full mt-4 text-gray-500">
          {cartItems.map((item, i) => (
            <li className="flex gap-2 items-center mt-3" key={i}>
              <img
                src={item.image}
                alt="item.title"
                className="max-w-[40%] opacity-90"
              />
              <div>
                <p className="text-sm font-bold">{item.title}</p>
                <p className="text-sm italic">Quantity: {item.qty}</p>
                <p className="text-sm italic">Price: {item.price} €</p>
              </div>
            </li>
          ))}
        </ul>
        {/* Total */}
        <div className="mt-8 text-gray-500 font-bold">
          <p>Subtotal: {subtotal} €</p>
        </div>
      </Drawer.Body>
    </Drawer>
  );
};

export default DrawerComp;
