import './Body.css'
import React from "react";


import Table from 'react-bootstrap/Table';


const Body = (props)=>{

    return(

                    <div>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Description1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td> {props.title}</td>
          <td> {props.desc}</td>
          <td> {props.desc1}</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}


// class Body extends React.Component
// {
//     render()
//     {
//         return(

//             <div className='card'>
//                 <h2>
//                     Movie Title
//                 </h2>

//                 <p>
//                     Movie Details
//                 </p>
//             </div>
            

//         );
//     }
// }

export default Body;