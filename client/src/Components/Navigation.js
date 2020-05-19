import React from 'react';
import { Navbar, Nav, Form, NavLink, FormControl, Button } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ position: "sticky", top: 0 }}>
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink to="/">Item1</NavLink>
      <NavLink to="/Item2">Item2</NavLink>
      <NavLink to="/Item3">Item3</NavLink>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search Something" className="mr-sm-2" />
      <Button variant="outline-secondary">Search</Button>
    </Form>
    </Navbar>
  )
}

export default Navigation