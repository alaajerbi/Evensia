import React from "react";
import { Navbar, NavbarBrand, Container } from "react-bootstrap";

function Nav(props) {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;
