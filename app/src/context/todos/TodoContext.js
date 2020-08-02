import React, { createContext, useContext } from "react";
import axios from "axios";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const getTodos = async () => {
    const res = await axios.get("http://localhost:5000/todo");
    console.log(res);
  };

  return (
    <TodoContext.Provider value={{ getTodos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
