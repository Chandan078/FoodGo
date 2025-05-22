import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Booking from '../Pages/Booking';
import Success from '../Pages/Success';
import Navbar from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import DineOut from '../Pages/DineOut';
import Help from '../Pages/Help';
import Restaurant from '../Pages/Restaurant';
import RestaurantSuccess from '../Pages/RestaurantSuccess';
const Router = () => {
  return (
    <div>
      <Navbar/>  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/dineout' element={<DineOut/>}/>
        <Route path='/restaurant/' element={<Restaurant/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/restaurant/:id' element={<Restaurant/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/restaurantsuccess' element={<RestaurantSuccess/>}/>
        </Routes>
        <Footer/>
      
     </div>
  )
}

export default Router;
