import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/header/Header";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Register from "./Components/register/Register"
import Login from "./Components/login/Login"
import Dashboard from "./Components/dashboard/Dashboard";
import ReadNow from "./Components/readNow/ReadNow";
import Footer from "./Components/footer/Footer"
import Home from "./Components/Home";


class App extends React.Component {
  render() {
    return (

      <div>

        <BrowserRouter>
       
          <Header />
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/readnow" element={<ReadNow />} />


          </Routes>

        </BrowserRouter>

        <Footer />
      </div>
    );
  }

}
export default App;
