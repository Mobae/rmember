import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import todoReducer from "./todoReducer";
import { todoTypes } from "../types";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const initialState = {
    todos: [],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { GET_TODO } = todoTypes;
  const { todos } = state;

  const getTodos = async () => {
    const res = await axios.get("http://localhost:5000/todo");
    console.log(res);
    dispatch({
      type: GET_TODO,
      payload: res.data.data,
    });
  };

  return (
    <TodoContext.Provider value={{ getTodos, todos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
