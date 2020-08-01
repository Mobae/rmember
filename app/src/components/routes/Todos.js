import React, { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import { Redirect } from "react-router-dom";
import AllTodo from "../pages/AllTodo";

const Todos = () => {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    console.log(isAuthenticated);
    return <Redirect to="/login" />;
  } else {
    return (
      <div>
        <AllTodo />
      </div>
    );
  }
};

export default Todos;
