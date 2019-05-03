import React from "react";
import { Navbar, Nav, Button, NavbarBrand } from "react-bootstrap";

function AwesomeNavbar() {

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');

        window.location.replace('/login');
    }
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {"Evensia"}
      </Navbar.Brand>
      <Nav className="ml-auto">
      <Button onClick={handleLogout}>Logout</Button>
      </Nav>
    </Navbar>
  );
}

export default AwesomeNavbar;
