import React from "react";
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

const SignUp = () => {
  return (
    // <div style = {{paddingTop:"150px", paddingLeft: "200px"}}>
    <div
      style={{
        margin: "0 auto",
        width: "60%",
        marginTop: "100px",
      }}
    >
      <Form fluid>
        <div style={{ flexWrap: "wrap" }}>
          <FormGroup>
            <ControlLabel>FirstName</ControlLabel>
            <FormControl name="name" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>LastName</ControlLabel>
            <FormControl name="name" />
          </FormGroup>
        </div>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl name="email" type="email" />
          <HelpBlock>Required</HelpBlock>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl name="password" type="password" />
        </FormGroup>
        <FormGroup>
          <ButtonToolbar>
            <Button appearance="primary">Submit</Button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SignUp;
