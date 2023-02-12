import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [users, setUser] = useState([]);

  // useEffect(()=>{

  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data =>{
  //       setUser(data);
  //   });

  // },[])

    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      setUser(res.data);
    });
  },[])


  return (
    <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {
                users.map(item =>
                  
                  <li key={item.id} className="list-group-item">
                    
                    {item.name}
                    {item.username}
                    {item.email}
                  
                  </li>

                  )   
              }
            </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
