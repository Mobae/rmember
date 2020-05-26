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
      <Nav className="ml-auto">
        <Link to="/signup">Sign Up</Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
