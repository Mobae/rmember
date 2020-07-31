import React, { createContext, useState } from "react";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../types";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        formData
      );
      console.log(res);
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
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, register }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
