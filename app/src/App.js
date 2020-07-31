import React from "react";
import SideNav from "./components/layouts/SideNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todos from "./components/routes/Todos";
import Completed from "./components/routes/Completed";
import Trash from "./components/routes/Trash";
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import DemoModal from "./components/layouts/DemoModal";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div style={{ display: "flex" }}>
          <SideNav />
        </div>
        <Switch>
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/completed" component={Completed} />
          <Route exact path="/trash" component={Trash} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
