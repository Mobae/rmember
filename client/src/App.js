import React from "react";
import Navigation from "./Components/Navigation";
import IntroSection from "./Components/IntroSection";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Route location="/" exact component={IntroSection} />
      </Router>
    </div>
  );
};

export default App;
