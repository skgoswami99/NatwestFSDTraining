import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function Header(props) {

  const [searchtext, setSearchText] = React.useState("");
  
  function searchNews(params) {
    props.search(params)

  
  }
  return (
        <Navbar bg="success" expand="lg">
          <Container fluid>
            <Navbar.Brand className="text-Dark fw-semibold testnav fs-3" href="#">NEWS-Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link className="text-light fs-5 nlink" href="/">Home</Nav.Link>
                <Nav.Link onClick={props.sports} className="nlink text-light fs-5" href="">Sports</Nav.Link>
                <Nav.Link onClick={props.business}className="nlink text-light fs-5" href="">Business</Nav.Link>
                
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 border-dark"
                  aria-label="Search"
                  onChange={(event)=> {setSearchText(event.target.value)}}
                />
                <Button onClick={searchNews.bind(this, searchtext)} className="text-light but1" variant="outline-dark">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
        
}
