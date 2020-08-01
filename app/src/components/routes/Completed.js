import React from "react";
import AuthContext from "../../context/auth/AuthContext";
import { Redirect } from "react-router-dom";

const Completed = () => {
  const { isAuthenticated } = AuthContext;
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <p>This Is The Completed Todos Page</p>
      <p>Testing Purpose</p>
    </div>
  );
};

export default Completed;
