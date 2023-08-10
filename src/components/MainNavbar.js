import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { totalTasks } from "../reducer/taskAction";
import { getList } from "../custom/crud";

const MainNavbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTaskList();
  }, []);

  const getTaskList = async () => {
    const taskData = await getList("tasks");
    if (taskData) {
      dispatch(totalTasks(taskData.length));
    }
  };
  const users = useSelector((state) => state.tasks);

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">My Demo</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/tasks" className="nav-link">
              Tasks <Badge bg="secondary">{users ?? 0}</Badge>
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
