import {Container, Row, Col, Button, Card, Form} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getList,
  createData,
  updateData,
  deletedata,
} from "../../../custom/crud";
import TaskList from "./TaskList";
import { totalTasks } from "../../../reducer/taskAction";

const Task = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [taskList, setTaskList] = useState("");

  const getTaskList = async () => {
    const taskData = await getList("tasks");
    if(taskData){
      setTaskList(taskData);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      title: title,
    };
    await createData("tasks", taskData);
    const taskList = await getList("tasks");

    if (taskList) {
      setTaskList(taskList);
      dispatch(totalTasks(taskList.length));
    }
    setTitle("");
  };

  const handleMark = async (id) => {
    const taskData = [...taskList];
    let newUpdateData = {};
    taskData.map((task) => {
      if (task.id === id) {
        newUpdateData = { ...task, isMark: true };
      }
      return newUpdateData;
    });
    await updateData(`tasks/${id}`, newUpdateData);
    const updatedTasksList = await getList("tasks");
    if(updatedTasksList){
     setTaskList(updatedTasksList);
    }
  };

  const handleDelete = async (id) => {
    await deletedata(`tasks/${id}`);
    const taskList = await getList("tasks");
    if(taskList){
      setTaskList(taskList);
      dispatch(totalTasks(taskList.length));
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <>
      <Container>
        <Row className="m-5">
          <Col md={12}>
            <Card>
              <Card.Header as="h5">Tasks lists</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit} className="row">
                  <Col md={10}>
                    <Form.Control
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="me-auto"
                      placeholder="Add your task here..."
                    />
                  </Col>
                  <Col md={1} sm={12}>
                    <Button
                      variant="secondary"
                      onClick={handleSubmit}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Col>
                  {/* <div className="vr" /> */}
                  <Col md={1} sm={12}>
                    <Button
                      variant="outline-danger"
                      onClick={() => setTitle("")}
                    >
                      Reset
                    </Button>
                  </Col>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {taskList && (
              <TaskList
                tasks={taskList}
                handleDelete={handleDelete}
                handleMark={handleMark}
              ></TaskList>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Task;
