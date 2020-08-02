import { todoTypes } from "../types";

const { GET_TODO } = todoTypes;

export default (state, action) => {
  switch (action.type) {
    case GET_TODO:
      return { ...state, todos: action.payload };
  }
};
