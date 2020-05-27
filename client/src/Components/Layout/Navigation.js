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
        <Link to="/signin">
          <div
            className="ui secondary button"
            style={{ backgroundColor: "#343a40" }}
          >
            Sign In
          </div>
        </Link>
        <Link to="/signup">
          <div className="ui primary button">Sign Up</div>
        </Link>
      </div>
    </Navbar>
  );
};

export default Navigation;
