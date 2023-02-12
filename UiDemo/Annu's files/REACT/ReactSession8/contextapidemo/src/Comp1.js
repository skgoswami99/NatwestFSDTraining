import React from 'react'
import AppContext from './AppContext'

export default function Comp1() {
  
    const {state, dispatch} = React.useContext(AppContext);
    
    const [uname,setUname] = React.useState('');

    return (


    <div>
        
        <h2>Input Component</h2>

        <input type="text" onChange={(uobj)=> setUname(uobj.target.value) } />
        <button onClick={()=> dispatch({type: 'ADD', value:uname})}>Add UserName</button>      
    </div>
      
    )
}


