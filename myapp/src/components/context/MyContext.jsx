import React, { createContext, useReducer } from "react";
export const MyNewContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "inputText":
      return { ...state, inputText: action.payload };

    case "addText":
      return { ...state, todo: [...state.todo, state.inputText] };

    case "deletelist":
      return {
        todo: state.todo.filter((ele, index) => index !== action.id),
      };
    default:
      return state;
  }
};

const MyContext = ({ Children }) => {
  const initialValue = {
    inputText: "",
    todo: [],
  };
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <MyNewContext.Provider value={{ state, dispatch }}>
        {Children}
      </MyNewContext.Provider>
    </>
  );
};

export default MyContext;
