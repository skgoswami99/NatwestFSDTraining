import React from 'react'
import { useState } from "react";

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import './Profile.css'

export default function Profile() {

  const [training, setTraining] = useState([

    {
      id:1,
      title:'Java FSD',
      desc:'Java FSD Training Morning Batch',
      isCompleted:true
    },
    {
      id:2,
      title:'Java FSD With Cloud',
      desc:'Java FSD Training Eveninh Batch',
      isCompleted:false

    },
    {
      id:3,
      title:'Java FSD with REACT',
      desc:'Java FSD Training Morning Batch',
      isCompleted:false
    }

  ])

  let myinlinestyle ={
    fontFamily: 'Tahoma, Geneva, Verdana, sans-serif',
    fontSize: '50pt',
    color: 'red',
    border: '1px solid black'
}

let myinlinestyle1 ={
  fontFamily: 'Tahoma, Geneva, Verdana, sans-serif',
  fontSize: '50pt',
  color: 'black',
  border: '1px solid black'
}


function markComleted(id)
{
 
  let index = training.indexOf(training.filter(item => item.id === id)[0]);
  training[index].isCompleted = training[index].isCompleted? false:true;
  setTraining([...training]);
}



  return (
  //   <Card style={{ width: '18rem' }}>
  //   <Card.Img variant="top" src="holder.js/100px180" />
  //   <Card.Body>
  //     <Card.Title>Card Title</Card.Title>
  //     <Card.Text>
  //       Some quick example text to build on the card title and make up the
  //       bulk of the card's content.
  //     </Card.Text>
  //     <Button variant="primary">Go somewhere</Button>
  //   </Card.Body>
  // </Card>

  <div>

    <p className='heading1'>
      Wel come to CSS styling Demo
    </p>

    <p style={myinlinestyle} >
      Inline style
    </p>

    <h1 style={myinlinestyle1}>
      Heading
    </h1>


    <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <ul className="list-group">
                        {
                            training.map(item =>
                                    
                                    <li className="list-group-item" key={item.id}>
                                      
                                      <input className='me-2' type="checkbox" onChange={markComleted.bind(this, item.id)} />
                                      {
                                          item.isCompleted ? <span className='text-success'>
                                            {
                                              item.desc
                                            }
                                          </span>   :    <span className='text-danger'>
                                            {item.desc}
                                          </span>
                                      }
                                    </li>
                                )         
                        }
                    </ul>
                </div>
            </div>
        </div>
  </div>
  )
}
