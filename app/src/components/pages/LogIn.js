import React, { useContext } from "react";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  ButtonToolbar,
  Button,
  Icon,
} from "rsuite";
import { useState } from "react";
import { AuthContext } from "../../context/auth/AuthContext";

const LogIn = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const handleSubmit = () => {
    login(formValue);
  };
  return (
    <div
      style={{
        margin: "0 auto",
        width: "60%",
        marginTop: "100px",
        justifyContent: "center",
      }}
    >
      <Form
        layout="horizontal"
        onChange={(formValue) => {
          setFormValue(formValue);
        }}
        formValue={formValue}
      >
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
        <hr></hr>
      </Form>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          <h5>SignUp ||</h5>
        </div>
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          <Icon style={{ margin: "20px" }} icon="google" size="2x" />
          <Icon style={{ margin: "20px" }} icon="facebook" size="2x" />
          <Icon style={{ margin: "20px" }} icon="twitter" size="2x" />
          <Icon style={{ margin: "20px" }} icon="linkedin" size="2x" />
        </div>
      </div>
    </div>
  );
};
export default LogIn;
