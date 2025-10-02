


import { use } from "react";
import { CartContext } from "../Providers/CartContext";

const Cart = () => {
  const { cart, setCart } = use(CartContext);

 
  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
    );
    setCart(updated);
  };

  
  const decreaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id && (item.qty || 1) > 1
        ? { ...item, qty: (item.qty || 1) - 1 }
        : item
    );
    setCart(updated);
  };


  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };


  const total = cart.reduce(
    (sum, item) => sum + (item.price * (item.qty || 1)),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <h2 className="text-2xl font-semibold text-gray-700">
          Your Cart is Empty 🛒
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Your Cart 🛒
        </h1>

        <div className="space-y-6">
          {cart.map((plant) => (
            <div
              key={plant.id}
              className="flex items-center gap-4 bg-gray-50 dark:bg-gray-700 rounded-xl p-4 shadow-sm"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {plant.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {plant.category}
                </p>
                <p className="text-indigo-600 dark:text-indigo-400 font-bold mt-1">
                  ${plant.price}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => decreaseQty(plant.id)}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-lg"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {plant.qty || 1}
                  </span>
                  <button
                    onClick={() => increaseQty(plant.id)}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => removeItem(plant.id)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Checkout Section */}
        <div className="flex justify-between items-center mt-8 border-t pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Total: ${total}
          </h2>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md hover:opacity-90 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
