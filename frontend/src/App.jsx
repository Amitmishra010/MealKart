import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Placeorder from './pages/placeorder'
import LoginPopup from './components/LoginPopup'
import Verify from './pages/verify/verify'
import MyOrders from './pages/MyOrders/myOrders'

function App() {
  const [showLoginPopup,setShowLoginPopup]=useState(false)
  return (
    
    <>
    {showLoginPopup?<LoginPopup setShowLoginPopup={setShowLoginPopup}/>:<></>}
     <div className='App w-full '>
      <Navbar setShowLoginPopup={setShowLoginPopup}/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/order' element={<Placeorder/>}/>
         <Route path='/verify' element={<Verify/>}/>
         <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
      <Footer />
    </div>
    </>
   
  )
}

export default App
