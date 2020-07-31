import React, { useState } from "react";
import { Form, Col, Row, FormGroup } from "react-bootstrap";
import axios from "axios";
const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        formData
      );
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <Form onSubmit={(e) => handleSubmit(e)} style={{ marginTop: "2em" }}>
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
      <button className="ui primary button">Sign In</button>
    </Form>
  );
};

export default SignIn;
