// Hooks
import { useContext } from "react";

// Context
import { CartContext } from "../api/context/CartProvider";
import { ProductsContext } from "../api/context/ProductsProvider";

const Checkout = () => {
  // Context: cart info
  const { cartItems, cartTotalProducts, cartTotalPrice } =
    useContext(CartContext);

  console.log(`cartItems: ${cartItems}`);
  if(cartItems.length > 0){
    console.log(`First item id: ${cartItems[0].id}`)
  }

  // Context: all products
  const allProducts = useContext(ProductsContext);
  console.log(allProducts);


  return (
    <>
      {cartItems.length === 0 ? (
        <p>Your checkout is empty</p>
      ) : (
        <div className="px-5 lg:px-20">
          <h1 className="text-2xl font-bold w-full border-b border-slate-900">
            Checkout
          </h1>
          {/* Table */}
          <div className="cartSummary w-full mt-6 border border-slate-200 rounded">
            {/* Titles */}
            <div className="grid grid-cols-5 gap-4 text-center">
              <div className="col-span-2 font-bold p-1.5">Product</div>
              <div className="font-bold p-1.5">Price</div>
              <div className="font-bold p-1.5">Quantity</div>
              <div className="font-bold p-1.5">Total</div>

              {/* Products rows */}
              <div>
                <img
                  className="w-10 h-10 object-contain mx-auto"
                  src="ruta-a-la-imagen"
                  alt="Product"
                />
              </div>
              <div>Product ID: {cartItems[0].productId}</div>
              <div>100 €</div>
              <div>2</div>
              <div>200 €</div>

              {/* Agrega más filas de productos aquí si es necesario */}
            </div>
          </div>

          <p className="mt-20">
            Cart items id: {cartItems[0].productId} - Qty: {cartItems[0].qty}
          </p>
          <p>Cart total items: {cartTotalProducts}</p>
          <p>Cart total price: {cartTotalPrice}€ </p>
        </div>
      )}
    </>
  );
};

export default Checkout;
