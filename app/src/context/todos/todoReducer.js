import { todoTypes } from "../types";

const { GET_TODO, GET_TAG } = todoTypes;

export default (state, action) => {
  switch (action.type) {
    case GET_TODO:
      return { ...state, todos: action.payload };
    case GET_TAG:
      return { ...state, tags: action.payload };
  }
};
