import React from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

const TodoApp = () => {
  return (
    <>
      <h1>Todo App</h1>
      <AddTodo />
      <ListTodo />
    </>
  );
};

export default TodoApp;
