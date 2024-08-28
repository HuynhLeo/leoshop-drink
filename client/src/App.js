import React from 'react'
import Navbaar from './Components/header/Navbaar';
import Newnav from './Components/newnav/Newnav';
import Maincomp from './Components/home/Maincomp';
import Footer from './Components/footer/Footer';
import Sign_in from './Components/signup_signin/Sign_in';
import Sign_up from './Components/signup_signin/Sign_up';
import Cart from './Components/cart/Cart';
import Buynow from './Components/buynow/Buynow';



import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbaar/>
      <Newnav/>
      <Routes>
        <Route path='/' element={<Maincomp/>} />
        <Route path='/login' element={<Sign_in/>} />
        <Route path='/register' element={<Sign_up/>} />
        <Route path='/getproductsone/:id' element={<Cart/>} />
        <Route path='/buynow' element={<Buynow/>} />
       
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
