import React from "react";
import { Button, Col, Form, Row, Table, Container } from "react-bootstrap";
import { ITask } from "./../../types/types";
import styles from "../Page.module.css";

function TaskTable(params: { name: String; todo: Boolean; tasks: ITask[] }) {
  let tasks = params.tasks;
  let todo = params.todo;
  const TableTitle: React.FC<{}> = () => {
    return (
      <div>
        <Row>
          <Col sm={11}>
            <h2>{params.name}</h2>
          </Col>
          <Col sm={1}>
            <Button variant="outline-primary">+</Button>
          </Col>
        </Row>
      </div>
    );
  };

  const TableBody: React.FC<{ tasks: ITask[]; todo: Boolean }> = ({
    tasks,
    todo,
  }) => {
    const rows = tasks.map((task: any, index: any) => {
      if (todo) {
        return (
          <tr>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td>{task.category}</td>
            <td>
              <Button>Complete</Button>
            </td>
          </tr>
        );
      }
      return (
        <tr>
          <td>{task.name}</td>
          <td>{task.description}</td>
          <td>{task.category}</td>
        </tr>
      );
    });
    if (todo) {
      return (
        <div className={styles["table-responsive"]}>
          <Table striped hover>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </div>
      );
    }
    return (
      <div className={styles["table-responsive"]}>
        <Table striped hover>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Description</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    );
  };

  return (
    <Container className={styles.tableComponent}>
      <TableTitle />
      <TableBody tasks={tasks} todo={params.todo} />
    </Container>
  );
}

export default TaskTable;
