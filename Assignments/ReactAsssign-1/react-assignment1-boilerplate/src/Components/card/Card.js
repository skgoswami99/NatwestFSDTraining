import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function News(props) {

  function saveNews(C, D) {
    props.submitHandler(C, D)
  }
  return (

    <Card className="text-center bg-white border-primary m-1 p-0" style={{width: '23rem'}}>
      <Card.Img data-testid="imgtag" className= "h-50" variant="top" src={props.img} />
      <Card.Body data-testid="cardbody">
        <Card.Title className=" title m-0 fw-bold">  {props.title}</Card.Title>
        <Card.Text>{props.author}</Card.Text>
        <Button className= "read1 bg-warning border-dark fw-semibold" 
        onClick={saveNews.bind(this, props.link, props.desc)} variant="Dark">Read Later</Button>
      </Card.Body>
    </Card>

  )
}