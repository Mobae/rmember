import React, { createContext, useState } from "react";
import { authTypes } from "../types";
import authReducer from "./authReducer";
import axios from "axios";
import { useReducer } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const { LOGIN_SUCCESS, USER_LOAD, REGISTER_SUCCESS } = authTypes;
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    user: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { isAuthenticated } = state;

  const loadUser = async () => {
    axios.defaults.headers["authorization"] = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:5000/auth/get");
      dispatch({ type: USER_LOAD, payload: res.data });
    } catch (err) {
      console.log(err.response);
    }
  };

  const login = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        formData
      );
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      console.log(err.response);
    }
  };

  const register = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/register",
        formData
      );
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, register, loadUser, isAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
