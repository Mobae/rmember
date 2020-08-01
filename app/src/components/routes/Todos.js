import React from "react";
import AuthContext from "../../context/auth/AuthContext";
import { Redirect } from "react-router-dom";

const Todos = () => {
  const { isAuthenticated } = AuthContext;
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <p>This Is The Todos Page</p>
      <p>Testing Purpose</p>
    </div>
  );
};

export default Todos;
