import React, { useState } from 'react'
import { Outlet, useNavigation } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import LoadingSpinner from '../Components/LoadingSpinner'
import { CartContext } from '../Providers/CartContext'

const RootLayout = () => {
  const [cart, setCart] = useState([])
  const navigation = useNavigation()
 
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className='w-full'>
        <Navbar />
        {navigation?.state === 'loading' ? (
          <LoadingSpinner />
        ) : (
          <main className='min-h-[calc(100vh-285px)] max-w-[1400px] mx-auto'>
            <Outlet />
          </main>
        )}
        <Footer />
      </div>
    </CartContext.Provider>
  )
}

export default RootLayout