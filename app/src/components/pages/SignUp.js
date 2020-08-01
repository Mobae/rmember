import React, { useState, useContext } from "react";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  ButtonToolbar,
  Button,
  FlexboxGrid,
} from "rsuite";
import { AuthContext } from "../../context/auth/AuthContext";

const SignUp = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const { register } = useContext(AuthContext);
  const handleSubmit = () => {
    register(formValue);
  };
  return (
    <div
      style={{
        margin: "0 auto",
        width: "60%",
        marginTop: "100px",
      }}
    >
      <Form
        fluid
        formValue={formValue}
        onChange={(formValue) => {
          setFormValue(formValue);
        }}
      >
        <FormGroup>
          <ControlLabel>First Name</ControlLabel>
          <FormControl name="firstName" />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Last Name</ControlLabel>
          <FormControl name="lastName" />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl name="email" type="email" />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl name="password" type="password" />
        </FormGroup>
        <FormGroup>
          <ButtonToolbar>
            <Button appearance="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SignUp;
