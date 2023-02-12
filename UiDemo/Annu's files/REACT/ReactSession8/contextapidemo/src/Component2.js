import React from 'react'
import AppContext from './AppContext'

export default function Component2() {
  return (
    <div>
         <h2>Component2</h2>

         {/* <ContextConsumer>
        {
          (data)=>{
            return (
                  <div>
                  <h2>{data.uname}</h2> 
                  <h2>{data.age}</h2>
                </div>
                )
        }
}
</ContextConsumer> */}

<AppContext.Consumer>
{
  (data)=>{
    return <div><h2>{data.uname}</h2> <h2>{data.age}</h2></div>
  }
}
</AppContext.Consumer>


    </div>
  )
}
