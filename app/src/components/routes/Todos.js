import React, { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import { Redirect } from "react-router-dom";

const Todos = () => {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    console.log(isAuthenticated);
    return <Redirect to="/login" />;
  } else {
    return (
      <div>
        <p>This Is The Todos Page</p>
        <p>Testing Purpose</p>
        {/* <AllTodo /> */}
      </div>
    );
  }
};

export default Todos;
