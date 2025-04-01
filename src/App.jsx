import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Homepage'
import Shop from './Shop'
import Shopdetails from './Shopdetails'
import Testimonials from './TestimonIals'
import Contact from './Contact'
import Checkout from './Checkout'
import Cart from './Cart'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
 

  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/checkout' element={<Checkout/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>
    <Route path='/details' element={<Shopdetails/>}></Route>
    <Route path='/testimonials' element={<Testimonials/>}></Route>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App
