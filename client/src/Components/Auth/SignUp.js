import React, { useState, Fragment } from "react";
import { Form, Col, Row, FormGroup } from "react-bootstrap";
import axios from "axios";

const SignUp = () => {
  const cardStyle = {};

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
  const handleSubmit = async (e) => {
    const { password, passwordC } = formData;
    e.preventDefault();
    console.log(formData);
    if (password === passwordC) {
      try {
        const res = await axios.post(
          "http://localhost:5000/auth/register",
          formData
        );
        console.log(res);
      } catch (err) {
        console.log(err.response);
      }
    }
  };
  return (
    <Fragment>
      <Form onSubmit={(e) => handleSubmit(e)} style={{ marginTop: "2em" }}>
        <h1 style={{ marginBottom: "1em" }}>Sign Up</h1>
        <FormGroup>
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                onChange={(e) => handleChange(e)}
                required={true}
              />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                onChange={(e) => handleChange(e)}
                required={true}
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            onChange={(e) => handleChange(e)}
            required={true}
          />
        </FormGroup>
        <FormGroup>
          <Row>
            <Col>
              <Form.Label type="password">Password</Form.Label>
              <Form.Control
                required={true}
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
              />
            </Col>
            <Col>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                required={true}
                type="password"
                name="passwordC"
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Row>
        </FormGroup>
        <button className="ui primary button">Sign Up</button>
      </Form>

      <div class="ui divider" wfd-id="65"></div>

      <div className="ui center aligned container" style={{}}>
        <h3>OR</h3>
        <h3>Sign Up With</h3>
      </div>
      <br />
      <div className="ui center aligned container">
        <a href="http://localhost:5000/login/auth/google">
          <button className="ui google plus button">
            <i className="google plus icon"></i>
            Google
          </button>
        </a>
        <button className="ui facebook button">
          <i className="facebook icon"></i>
          Facebook
        </button>
        <button className="ui twitter button">
          <i className="twitter icon"></i>
          Twitter
        </button>
        <button className="ui linkedin button">
          <i className="linkedin icon"></i>
          LinkedIn
        </button>
      </div>
    </Fragment>
  );
};

export default SignUp;
