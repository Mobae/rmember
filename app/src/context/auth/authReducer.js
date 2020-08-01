import { authTypes } from "../../context/types";
import { PromiseProvider } from "mongoose";
const {
  USER_LOAD,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} = authTypes;

export default (state, action) => {
  switch (action.type) {
    case USER_LOAD:
      return { ...state, isAuthenticated: true, user: action.payload };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", "bearer " + action.payload.token);
      return { ...state, isAuthenticated: true };
  }
};
