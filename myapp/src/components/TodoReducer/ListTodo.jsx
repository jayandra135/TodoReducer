import React, { useContext } from "react";
import { MyNewContext } from "../context/MyContext";
const ListTodo = () => {
  const { state, dispatch } = useContext(MyNewContext);
  return (
    <>
      {state.todo.map((ele, index) => {
        return (
          <p key={index}>
            {ele}{" "}
            <button onClick={() => dispatch({ type: "deletelist", id: index })}>
              delete
            </button>
          </p>
        );
      })}
    </>
  );
};

export default ListTodo;
