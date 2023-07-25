import React, { useContext } from "react";
import MyNewContext from "../context/MyContext";
const AddTodo = () => {
  const { dispatch } = useContext(MyNewContext);
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) =>
            dispatch({ type: "inputText", payload: e.target.value })
          }
        />
        <button onClick={() => dispatch({ type: "addText" })}>Add List</button>
      </div>
    </>
  );
};

export default AddTodo;
