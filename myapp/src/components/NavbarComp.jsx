import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MyNewContext } from "./context/MyContext";

function NavbarComp() {
  const { state } = useContext(MyNewContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Todo App
            </NavLink>
            <NavLink className="nav-link" to="/addTodo">
              Add-Todo
            </NavLink>
            <NavLink className="nav-link" to="/listTodo">
              List-Todo
            </NavLink>
            <NavLink className="nav-link" to="/counter">
              Counter({state.todo.length})
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
