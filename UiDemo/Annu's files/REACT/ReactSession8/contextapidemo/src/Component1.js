import React from 'react'
import AppContext from './AppContext'
import Component2 from './Component2'


export default function Component1() {
  return (
    <div>
        <h2>Component1</h2>

      {/* <ContextConsumer>

        {
          (data)=>{
            return <div><h2>{data.uname}</h2> <h2>{data.age}</h2></div>
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

        <Component2/>
    </div>
  )
}
