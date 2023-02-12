import React from 'react'
import AppContext from './AppContext'

export default function Comp2() {
 
    const {state, dispatch} = React.useContext(AppContext);

    return (
    <div>
        <h2>Comp2</h2>
        <ul>
            {
                state.map(item => <li onClick={()=> dispatch({type: 'REMOVE', value: item})}>{item}</li>)
            }
        </ul>
    </div>
  )
}
