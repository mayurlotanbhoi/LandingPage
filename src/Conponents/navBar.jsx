import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Buttons } from '../Ui';

function NavBar() {
  return (
    <Navbar collapseOnSelect  expand="lg"  style={{width: "100vw", backgroundColor: "white"}} sticky='top' >
      <Container className="d-flex text-center" style={{height: "4.5rem"}}>
        <Navbar.Brand  href="#home" className='text-center' style={{height: "4.5rem"}} ><span  className='logo' style={{fontSize: "2rem"}} >app</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav className='nav-mobile-menu'>
            <Nav.Link className='active' href="#deets">More deets</Nav.Link>
            <Nav.Link className='active' eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>

            <Nav.Link eventKey={2} href="#memes" className='text-center' style={{height: "4.5rem"}}>
           <Buttons text={"Login"} heigth={"2rem"} width={"5rem"} backgroundColor={"#EF3C0C"}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
