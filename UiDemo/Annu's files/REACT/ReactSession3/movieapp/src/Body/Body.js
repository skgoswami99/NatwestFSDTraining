import './Body.css'
import React from "react";


const Body = (props)=>{

    return(

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

                    // <div className='card'>
                    //     <h2>
                    //         {props.title}
                    //     </h2>
        
                    //     <hr></hr>

                    //     <p>
                    //         {props.desc}
                    //     </p>

                    //     <p>
                    //         {props.desc1}
                    //     </p>
                    // </div>
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