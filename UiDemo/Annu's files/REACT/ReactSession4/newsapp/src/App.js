import logo from './logo.svg';
import './App.css';
import MaterialComponent from './MaterialComponent/MaterialComponent';

import HeaderMenuBar from './HeaderMenuBar/HeaderMenuBar.js';

function App() {
  return (
    <div className="App">

    <HeaderMenuBar/>

      <div className='row'>

      <MaterialComponent/>
      <MaterialComponent/>
      <MaterialComponent/>
      <MaterialComponent/>
    </div>      
    </div>
  );
}

export default App;
