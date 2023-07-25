// import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComp from "./components/NavbarComp";
import TodoApp from "./components/TodoReducer/TodoApp";
import AddTodo from "./components/TodoReducer/AddTodo";
import ListTodo from "./components/TodoReducer/ListTodo";
import MyContext from "./components/context/MyContext";
function App() {
  return (
    <div className="App">
      <Router>
        <MyContext>
          <NavbarComp />
          <Routes>
            <Route path="/" element={<TodoApp />} />
            <Route path="/addTodo" element={<AddTodo />} />
            <Route path="/listTodo" element={<ListTodo />} />
          </Routes>
        </MyContext>
      </Router>
    </div>
  );
}

export default App;
