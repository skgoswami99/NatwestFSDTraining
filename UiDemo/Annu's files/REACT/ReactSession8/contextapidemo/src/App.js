import React, { useReducer, useState } from "react";
import AppContext from "./AppContext";

import reducer, {initialstate} from "./Reducer";

import Component1 from "./Component1";
import Comp1 from "./Comp1"
import Comp2 from "./Comp2"

function App() {
  
const [user, setUser] = useState(
    {'uname':"Tim",'age':25}
    );

    const [state, dispatch] = useReducer(reducer, initialstate);

 return (

    <div>

      {/* <ContextProvider value={user}>
      <Component1/>
      </ContextProvider> */}
      
      <AppContext.Provider value={user}>
        <Component1/>
      </AppContext.Provider>

      <AppContext.Provider value={{state,dispatch}}>
        <Comp1/>
        <Comp2/>
      </AppContext.Provider>

    </div>
    
  );
}

export default App;
