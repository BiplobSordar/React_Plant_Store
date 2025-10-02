
import React from "react";
import { useNavigate } from "react-router";
import { use } from "react";
import { CartContext } from "../Providers/CartContext";
import { toast } from 'react-toastify'

const PlantCard = ({ plant }) => {
  const { name, image, category, price, id } = plant;
 
  const navigate = useNavigate();
  const { cart, setCart } = use(CartContext);

  // Add to Cart handler
  const handleAddToCart = () => {
    const exists = cart.find((item) => item.id === id);
    if (exists) {
      // If already in cart, increase qty
      const updated = cart.map((item) =>
        item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
      
      );
      setCart(updated);
      toast.success('Quantity Increase ')
    } else {
      // New item with qty = 1
      setCart([...cart, { ...plant, qty: 1 }]);
      toast.success('Product Added Successfully ')
    }
  };

  return (
    <div className="flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transform transition duration-300 hover:scale-[1.02]">
        {/* Image Section */}
        <figure className="relative h-64">
          <img className="w-full h-full object-cover" src={image} alt={name} />
          {/* Category Badge */}
          <span className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {category}
          </span>
        </figure>

        {/* Body */}
        <div className="card-body p-6 text-gray-800 dark:text-gray-200">
          <h2 className="card-title text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {name}
          </h2>

          {/* Price */}
          <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            ${price}
          </p>

          {/* Actions */}
          <div className="card-actions justify-between">
            <button
              onClick={handleAddToCart}
              className="px-5 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg shadow-md hover:opacity-90 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => navigate(`/plant-details/${id}`, { state: plant })}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md hover:opacity-90 transition"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
