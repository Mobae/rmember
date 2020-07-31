import React from "react";
import SideNav from "./components/layouts/SideNav";
// import TopNav from "./components/layouts/TopNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todos from "./components/routes/Todos";
import Completed from "./components/routes/Completed";
import Trash from "./components/routes/Trash";
<<<<<<< HEAD
import DemoModal from '/components/'
=======
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
>>>>>>> 01d32ee23b53cf9c165f964f31e0bdda001811ac

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* <TopNav /> */}
        <SideNav />
        <DemoModal />
      </div>
      <Switch>
        <Route exact path="/todos" component={Todos} />
        <Route exact path="/completed" component={Completed} />
        <Route exact path="/trash" component={Trash} />
      </Switch>
    </Router>
  );
}

export default App;
