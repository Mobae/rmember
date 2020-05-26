import React from "react";
import { Form, Col, Row, FormGroup, Button } from "react-bootstrap";
const SignUp = () => {
  const [formData, setFormData] = {
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
  };
  return (
    <Form>
      <h1 style={{ marginBottom: "1em" }}>Sign Up</h1>
      <FormGroup>
        <Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Form.Label>Email</Form.Label>
        <Form.Control />
      </FormGroup>
      <FormGroup>
        <Row>
          <Col>
            <Form.Label>Password</Form.Label>
            <Form.Control />
          </Col>
          <Col>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control />
          </Col>
        </Row>
      </FormGroup>
      <Button id="sign-up-button" variant="success">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUp;
