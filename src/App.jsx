import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Perfume from './components/Perfume'
import Wallet from './components/Wallet'
import Belt from './components/Belt'
import Shoes from './components/Shoes'
import Winterwear from './components/Winterwear'
import Summerwear from './components/Summerwear'
import Pent from './components/Pent'
import Shirt from './components/Shirt'
import Jeans from './components/Jeans'
import Tshirt from './components/Tshirt'
import Ethnicwear from './components/Ethnicwear'
import Partywear from './components/Partywear'
import AddToCart from './components/AddToCart'
import Whishlist from './components/Whishlist'
import Login from './components/Login'
import LoginSuccessfully from './components/LoginSuccessfully'
import Detailspage from './components/Detailspage'
import Videopage from './pages/Videopage'
import AddData from './components/AddData'
import Checkoutpage from './components/Checkoutpage'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/perfume', element: <Perfume /> },
        { path: '/wallet', element: <Wallet /> },
        { path: "/belt", element: <Belt /> },
        { path: '/shoes', element: <Shoes /> },
        { path: '/winterwear', element: <Winterwear /> },
        { path: '/summerwear', element: <Summerwear /> },
        { path: "/pent", element: <Pent /> },
        { path: '/shirt', element: <Shirt /> },
        { path: "/jeans", element: <Jeans /> },
        { path: "/tshirt", element: <Tshirt /> },
        { path: "/ethnicwear", element: <Ethnicwear /> },
        { path: "/partywear", element: <Partywear /> },
        { path: '/addtocart', element: <AddToCart /> },
        { path: '/adddata', element: <AddData /> },
        { path: '/checkoutpage', element: <Checkoutpage /> },
        { path: '/whishlist', element: <Whishlist /> },
        { path: '/login', element: <Login /> },
        { path: '/loginsuccessfully', element: <LoginSuccessfully /> },
        { path: '/detailspage', element: <Detailspage /> },
        { path: '/videopage', element: <Videopage /> }
        
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
