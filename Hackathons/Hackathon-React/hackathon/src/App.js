
import './App.css';
import Body from './components/Body';
import Footer from './components/footer';
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Register from './components/Register';
import Login from './components/login';
import Wallet from './components/Wallet';
import Checkout from './components/Checkout';
import Food from './components/Food';
import Foodpayment from './components/foodpayment';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      
      <Routes>
      
      <Route path="/" element={<Body/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/wallet" element={<Wallet/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/food" element={<Food/>} />
      <Route path="/foodpay" element={<Foodpayment/>} />
                        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
