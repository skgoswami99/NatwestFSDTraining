import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import Home from './Home/Home';
import Product from './Product/Product';
import ContactUs from './ContactUs/ContactUs';
import Customerdetails from './Customerdetails/Customerdetails';


function App() {
  return (
    <div className="App">
        <Header/>
        <AboutUs/>
        
        <BrowserRouter>
          <Routes>
              <Route path="/aboutus" element={<AboutUs/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/contactus" element={<ContactUs/>}/>
              <Route path="/product" element={<Product/>}/>
              <Route path="/CustomerDetails/:id" element={<Customerdetails/>}/>
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
