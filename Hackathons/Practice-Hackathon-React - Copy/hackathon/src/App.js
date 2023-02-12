
import './App.css';
import Body from './components/Body';
import Footer from './components/footer';
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Register from './components/Register';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      {/* <Body/> */}
      

      <Routes>

      <Route path="/" element={<Body/>} />
      {/* <Route path="" element={} />
      <Route path="" element={} /> */}
      <Route path="/register" element={<Register/>} />
        
        
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
