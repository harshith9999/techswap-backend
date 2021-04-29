import React, { useState } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./Navbar.css";
import logo from "./logo.png";

function NavigationBar() {
  return (
    <Navbar expand="lg" variant="dark" className="sticky-top">
      <Navbar.Brand href="#home">
        <img style={{ width: 150, height: 70 }} src={logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About us</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          <NavDropdown title="Courses" id="basic-nav-dropdown">
            <NavDropdown.Item>Civil Engineering</NavDropdown.Item>
            <NavDropdown.Item>Mechanical Engineering</NavDropdown.Item>
            <NavDropdown.Item>Computers Science & Engineering</NavDropdown.Item>
            <NavDropdown.Item>Electrical Engineering</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
