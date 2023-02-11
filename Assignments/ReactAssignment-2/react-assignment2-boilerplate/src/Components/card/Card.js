import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards(props) {

  function saveNews(C) {
    props.submitHandler(C)
  }
  return (

    <Card data-testid="cardbody" className="text-center bg-white border-primary m-1 p-0" style={{ width: '23rem' }}>
      <Card.Img data-testid="imgtag" className="h-50" variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className=" m-0 fw-bold title">  {props.title}</Card.Title>
        <Card.Text>{props.author}</Card.Text>
        <Button className="bg-warning border-dark fw-semibold read1"
          onClick={saveNews.bind(this, props.news)} variant="Dark">Read Later</Button>
      </Card.Body>
    </Card>

  )
}