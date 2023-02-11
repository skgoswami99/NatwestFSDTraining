import React from 'react'
import Card from 'react-bootstrap/Card';

export default function DisplayCard(props) {
  return (
    
      <Card className="text-center bg-white border-primary m-1 p-0" style={{width: '23rem'}}>
      <Card.Img className= "h-50" variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className=" m-0 fw-bold"><a href={props.link} target="blank">{props.title}</a></Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
    </Card>
    
  )
}
