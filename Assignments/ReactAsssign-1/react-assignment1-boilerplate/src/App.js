import React from 'react';
import Dashboard from './Components/dashboard/Dashboard'
import Footer from './Components/footer/Footer';
// import './App.css';
// import Footer from './Components/footer/Footer';

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'

class App extends React.Component{
  render(){

    return <div className = 'main-content' >
    
    <Dashboard/>
    <Footer/>
    </div>
   
  }
}
export default App;
