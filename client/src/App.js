import React from "react";
import Navigation from "./Components/Layout/Navigation";
import IntroSection from "./Components/Pages/IntroSection";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Container style={{ marginTop: "1em" }}>
          <Route path="/" exact component={IntroSection} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} />
        </Container>
      </Router>
    </div>
  );
};

export default App;
