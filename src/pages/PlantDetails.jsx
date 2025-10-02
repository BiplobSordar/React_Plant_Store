
import { useContext, useState } from 'react'
import { useLoaderData, useLocation, useParams } from 'react-router'
import { CartContext } from '../Providers/CartContext'
import { toast } from 'react-toastify'
const PlantDetails = () => {
  const { cart, setCart } = useContext(CartContext)
  const location = useLocation()



  const { name, description, category, price, image,id } = location?.state || {}
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
      setCart([...cart, { ...location?.state, qty: 1 }]);
      toast.success('Product Added Successfully ')
    }
  };

 

  return (

    <div className="flex items-center justify-center min-h-screen  px-4">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.01]">

        <figure className="relative h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={name}
          />

          <span className="absolute top-5 left-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
            {category}
          </span>
        </figure>


        <div className="p-8 space-y-6">
          {/* Title + Price */}
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-between">
            {name}
            <span className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
              ${price}
            </span>
          </h2>


          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {description}
          </p>


          <div className="flex justify-end">
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 cursor-pointer  rounded-lg text-lg font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default PlantDetails