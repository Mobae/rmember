import React, { useState } from "react";
import { Form, Col, Row, FormGroup, Button } from "react-bootstrap";
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordC: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <h1 style={{ marginBottom: "1em" }}>Sign Up</h1>
      <FormGroup>
        <Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control name="firstName" onChange={(e) => handleChange(e)} />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control name="lastName" onChange={(e) => handleChange(e)} />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" onChange={(e) => handleChange(e)} />
      </FormGroup>
      <FormGroup>
        <Row>
          <Col>
            <Form.Label type="password">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              name="passwordC"
              onChange={(e) => handleChange(e)}
            />
          </Col>
        </Row>
      </FormGroup>
      <Button id="sign-up-button" variant="success" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUp;