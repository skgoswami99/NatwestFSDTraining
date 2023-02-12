
import './App.css';
import Body from './components/Body';
import Footer from './components/footer';
import Header from './components/Header';

import { BrowserRouter } from "react-router-dom";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Register from './components/Register';
import Login from './components/login';
import Checkout from './components/Checkout';
import Food from './components/Food';
import Foodpayment from './components/foodpayment';
import Converter from './components/Converter';
import Currencypymnt from './components/Currencypymnt';
import Movie from './components/Movie';
import Addmoney from './components/Addmoney';
import Recharge from './components/Recharge';
import Transfer from './components/Transfer';
import ContactUs from './components/ContactUs';
import Rewards from './components/Rewards';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      
      <Routes>
      
      <Route path="/" element={<Body/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/movie" element={<Movie/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/food" element={<Food/>} />
      <Route path="/foodpay" element={<Foodpayment/>} />
      <Route path="/converter" element={<Converter/>} />
      <Route path='/currencypay' element={<Currencypymnt/>}/>
      <Route path='*' element={<Body/>}/>
      <Route path='/addmoney' element={<Addmoney/>}/>
      <Route path='/topup' element={<Recharge/>}/>
      <Route path='/transfer' element={<Transfer/>}/>
      <Route path="/contactus" element={<ContactUs />} />
      <Route path='/rewards' element={<Rewards/>} />
                        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
