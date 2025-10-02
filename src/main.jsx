import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import About from './pages/About.jsx'
import RootLayout from './Layouts/RootLayout.jsx'
import Home from './pages/Home.jsx'
import LoadingSpinner from './Components/LoadingSpinner.jsx'
import PlantDetails from './pages/PlantDetails.jsx'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
const router = createBrowserRouter([
  {
    
    path: '/',
    Component: RootLayout,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        element: <Home />,
       
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/plant-details/:id',
        Component: PlantDetails,
        loader: ({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`),
      },
      {
        path: '/cart',
        Component: Cart,
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer/>

  </StrictMode>,
)
