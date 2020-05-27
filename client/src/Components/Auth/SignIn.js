import React, { useState } from "react";
import { Form, Col, Row, FormGroup } from "react-bootstrap";
const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      <h1 style={{ marginBottom: "1em" }}>Sign In</h1>
      <FormGroup>
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          onChange={(e) => handleChange(e)}
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <Form.Label type="password">Password</Form.Label>
        <Form.Control
          required={true}
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
      </FormGroup>
      <button className="ui primary button" style={{ letterSpacing: "1px" }}>
        Sign In
      </button>
    </Form>
  );
};

export default SignIn;
