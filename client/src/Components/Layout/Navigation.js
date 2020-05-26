import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ position: "sticky", top: 0 }}>
      <div>
        <Link to="/">
          <Navbar.Brand>Rmember</Navbar.Brand>
        </Link>
      </div>
      <div
        className="ml-auto"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Nav className="mr-3">
          <Link to="/signin">Sign In</Link>
        </Nav>
        <Nav>
          <Link to="/signup">Sign Up</Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Navigation;
