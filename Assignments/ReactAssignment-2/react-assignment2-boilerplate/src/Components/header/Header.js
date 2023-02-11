import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import Auth from '../../services/Services';



export default function Header() {

  const [login, setLogin] = React.useState(false);
  const navigate = useNavigate();


  React.useEffect(() => {

    // fetch('http://localhost:3001/auth/v1/isAuthenticated', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`
    //   }
    // }).then(res => res.json())
    Auth()
      .then(data => {
        if (data.isAuthenticated === true) {
          setLogin(true)
        }
      });
  })

  function logout() {
    localStorage.removeItem('token');
    navigate("/");
  };


  return (

    <Navbar bg="success" expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-Dark fw-semibold fs-3" href="/">NEWS-Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link className="text-light fs-5 nlink" href="/dashboard">Dashboard</Nav.Link>
            {(login) ?
              <>
                <Nav.Link className="text-light fs-5" href="/readnow">ReadNow</Nav.Link>
              </>
              :
              null
            }

          </Nav>

          <Nav>
            {(login) ?
              <>
                <Button className="text-light bg-white text-dark fw-bolder" variant="outline-dark">Hi Mr Admin</Button>
                <Button onClick={logout} className="text-light mx-2 bg-secondary" variant="outline-dark" href="/">Logout</Button>
              </>
              :
              <>
                <Button className="but1 text-light mx-3 bg-secondary" variant="outline-dark" href="/register">Register</Button>
                <Button className="but1 text-light me-4 bg-secondary" variant="outline-dark" href="/login"> Login</Button>
              </>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

