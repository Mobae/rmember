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
        <div
          className="ui secondary button"
          style={{ backgroundColor: "#343a40" }}
        >
          <Link to="/signin">Sign In</Link>
        </div>
        <div className="ui primary button">
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </Navbar>
  );
};

export default Navigation;
