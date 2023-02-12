import React from "react";
import './Body.css'

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


const Body = (props) => {

    return (

        

            <div className="card col-md-3 m-3">
                <div className="card-body">
                    <h5 className="card-title">{props.id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
                    <p className="card-text">{props.desc}</p>
                    
                </div>
            </div>
           


        // <div classNameName= 'card'>

        //     <h2>
        //         {props.id}
        //     </h2>

        //     <p>
        //         {props.title}
        //     </p>

        //     <p>
        //         {props.desc}
        //     </p>


        // </div>

    )
}


export default Body;
