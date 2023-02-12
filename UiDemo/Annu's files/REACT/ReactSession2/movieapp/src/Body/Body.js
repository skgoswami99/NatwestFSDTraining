import './Body.css'
import React from "react";


const Body = (props)=>{

    return(

                    <div className='card'>
                        <h2>
                            {props.title}
                        </h2>
        
                        <hr></hr>

                        <p>
                            {props.desc}
                        </p>

                        <p>
                            {props.desc1}
                        </p>
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