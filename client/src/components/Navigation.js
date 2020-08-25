import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" className="d-flex p-0">
        <img
          src={require("../assets/logo.jpg")}
          width="40"
          height="40"
          className="d-inline-block align-top mr-3"
          alt="logo"
        ></img>
        <div className="navbar-logo">GiGo</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
