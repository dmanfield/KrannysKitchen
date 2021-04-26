import React from 'react';
import { 
  Navbar,
  Nav,
  NavDropdown,
 } from 'react-bootstrap'




const NavHeader = ({handleLogout, user}) => {

  return (
    <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/recipes">Kranny's Kitchen</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/random">Random Recipe</Nav.Link>
              <Nav.Link href="/restaraunt">Restuarant</Nav.Link>
            </Nav>
        
            <NavDropdown title={user ? user.username : "Account"} color="black" drop="left" >
                <NavDropdown.Item href="/">Account Details</NavDropdown.Item>
                <NavDropdown.Item href="/post">New Recipe</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            
            
          </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default NavHeader



