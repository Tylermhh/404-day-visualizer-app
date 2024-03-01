import React from "react";
import styles from "./Table.module.css";
import { Button, Col, Form, Row, Table, Container } from "react-bootstrap";
import { ITask } from "./../../types/types";

function TaskTable(params: { tasks: ITask[] }) {
  let tasks = params.tasks;
  const TableTitle: React.FC<{}> = () => {
    return (
      <div>
        <Row>
          <Col sm={11}>
            <h2>Todo List (Coming Up)</h2>
          </Col>
          <Col sm={1}>
            <Button variant="outline-primary">+</Button>
          </Col>
        </Row>
      </div>
    );
  };

  const TableBody: React.FC<{ tasks: ITask[] }> = ({ tasks }) => {
    const rows = tasks.map((row: any, index: any) => {
      return (
        <tr>
          <td>{row.name}</td>
          <td>{row.description}</td>
          <td>{row.category}</td>
          <td>{row.done.toString()}</td>
          <td>
            <Form>
              <Form.Check type={"checkbox"} id={"compelted"} />
            </Form>
          </td>
          <td>{row.deadline}</td>
          <td>
            <Button>Delete</Button>
          </td>
        </tr>
      );
    });

    return (
      <div className={styles["table-responsive"]}>
        <Table striped hover>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Completed</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    );
  };

  return (
    <Container>
      <TableTitle />
      <TableBody tasks={tasks} />
    </Container>
  );
}

export default TaskTable;
