import React from "react";
import Navigation from "./Components/Navigation";
import IntroSection from "./Components/IntroSection";
import SignUp from "./Components/SignUp";
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
        </Container>
      </Router>
    </div>
  );
};

export default App;
