import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import todoReducer from "./todoReducer";
import { todoTypes } from "../types";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const initialState = {
    todos: [],
    tags: [],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { GET_TODO, GET_TAG } = todoTypes;
  const { todos, tags } = state;

  const getTodos = async () => {
    const res = await axios.get("http://localhost:5000/todo");
    dispatch({
      type: GET_TODO,
      payload: res.data.data,
    });
  };

  const getTags = async () => {
    const res = await axios.get("http://localhost:5000/tag");
    dispatch({
      type: GET_TAG,
      payload: res.data.data,
    });
  };

  return (
    <TodoContext.Provider value={{ getTodos, getTags, todos, tags }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
