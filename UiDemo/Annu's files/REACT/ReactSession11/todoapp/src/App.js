import logo from './logo.svg';
import './App.css';


import Header from './Header/Header';
import TodoList from './TodoList/TodoList';
import AddItem from './AddItem/AddItem';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <div>    
      <Header/>
    
    <div className="container">
    <Provider store={store}> 
      <AddItem/>
      <TodoList/>  
      </Provider>
    </div>
    </div>

  );
}

export default App;
