import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (

    <div>

    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Routing</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="aboutus">AboutUs</Nav.Link>
            <Nav.Link href="contactus">Contactus</Nav.Link>
            <Nav.Link href="product">Product</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
        
    {/* <a href="https://reactrouter.com/en/v6.3.0/getting-started/installation">Link</a> */}

    </div>
    )
} 