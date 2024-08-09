import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import BackButton from "./BackButton";
import Empty from "./Empty";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-6 w-full h-full">
      <BackButton />
      {cartItems.length === 0 ? (
        <Empty />
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row w-full items-center justify-between mb-4 rounded-md shadow-2xl overflow-hidden p-6 mt-8"
          >
            <div className="p-2 flex flex-col capitalize justify-center items-start w-full sm:w-[60%] order-2 sm:order-1">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                {item.title}
              </h2>
              <h2 className="font-medium text-gray-700">
                Price: {item.rentPrice}
              </h2>
              <div className="w-full flex gap-4">
                <Link
                  to={`/payment?rentPrice=${item.rentPrice}`}
                  className="bg-green-500 text-white p-2 font-semibold rounded-md w-full
                  sm:w-[40%] mt-4 flex items-center justify-center"
                >
                  <span>Book Now</span>
                </Link>
                <button
                  className="bg-red-500 text-white p-2 font-semibold rounded-md w-full sm:w-[40%] mt-4"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="w-[80%] sm:w-[25%] flex items-center justify-center mb-4 sm:mb-0 order-1 sm:order-2">
              <img
                src={item.image}
                className="object-cover w-full h-auto sm:h-full"
                alt={item.title}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
