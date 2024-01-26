import './App.css';
import React from "react"

import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import BookingPage from './components/BookingPage';
import Menu from './components/Menu';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';


function App() {
  return (
    <>
      
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/booking-page" element={<BookingPage/>} />
        <Route path="/order-online" element={<OrderOnline/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;






