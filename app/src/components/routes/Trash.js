import React from "react";
import AuthContext from "../../context/auth/AuthContext";
import { Redirect } from "react-router-dom";

const Trash = () => {
  const { isAuthenticated } = AuthContext;
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <p>This Is The Trash Page, More Like Tars Page hehe 😏</p>
      <p>Testing Purpose</p>
    </div>
  );
};

export default Trash;
