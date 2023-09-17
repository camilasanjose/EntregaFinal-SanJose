import { useContext } from "react";
import { CartContext } from "../../CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (totalQuantity === 0) {
    return (
      <section>
        <h1 className="text-center font-bold text-7xl my-10">
          No hay productos en el carrito
        </h1>
        <Link to="/" className="flex justify-center">
          <button className="rounded-full border border-[#E5E7EB] py-4 px-4 my-44 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white">
           Volver a los productos
          </button>
        </Link>
      </section>
    );
  }

  return (
    <section className="container mx-auto mt-5">
      <div className="flex shadow-md my-5">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{totalQuantity} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {cart.map((p) => (
            <CartItem key={p.id} {...p} />
          ))}
          <Link
            to="/"
            className="inline-flex font-semibold text-black text-sm mt-10 mr-3"
          >
            <svg className="inline mr-2 text-black w-4" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Seguir comparndo
          </Link>
          <button
            className="inline-flex rounded-full border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
            onClick={() => clearCart()}
          >
            Borrar productos
          </button>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Resumen
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              {totalQuantity} Items
            </span>
            <span className="font-semibold text-sm">{total} $</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Envio
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Envio estandar - 100.00$</option>
            </select>
          </div>
          
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total </span>
              <span>{total + 100} $</span>
            </div>
            <Link to="/checkout">
              <button className="rounded-full border border-[#E5E7EB] py-3 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white uppercase w-full">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;