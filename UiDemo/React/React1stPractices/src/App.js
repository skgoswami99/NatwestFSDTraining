import Header from './Header/Header';
import './App.css';
import Footer from './Footer/Footer';
import Body from './Body/Body';

import Dashboard from "./Dashboard/Dashboard";
import Product from './ProductDemo/Product';
import Profile from './profile/profile';


function App() {

  const TestData =
  [
    {
      id: "One",
      title: "Movie1",
      desc: "This is movie1 description",
      
    },
    {
      id: "Two",
      title: "Movie2",
      desc: "This is movie2 description",
      
    },
    {
      id: "Three",
      title: "Movie3",
      desc: "This is movie3 description",
   
    },
    
  ]

  return (
    <div className="App">
      
      

      <Header/> 

      <Dashboard/>

      <Product/>

      <Profile/>

      <div className='row'>
      {TestData.map(obj => <Body id={obj.id} title={obj.title} desc={obj.desc} />)}
      </div>
      {/* {TestData.map(testObj => <Body id={testObj.id} title={testObj.title} desc={testObj.desc}/>)} */}



      <Footer/>

    </div>
  );
}

export default App;
