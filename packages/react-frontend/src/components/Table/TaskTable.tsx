import React from "react";
import { Button, Col, Row, Table, Container } from "react-bootstrap";
import { ITask } from "./../../types/types";
import styles from "../Page.module.css";
import moment from "moment";
import NewTaskModal from "../Modals/NewTaskModal";

function TaskTable(params: {
  name: String;
  todo: Boolean;
  page: String;
  tasks: ITask[];
}) {
  let tasks = params.tasks;

  const TableTitle: React.FC<{tasks : ITask[]}> = () => {
    if (params.todo) {
      return (
        <div>
          <Row>
            <Col sm={11}>
              <h2>{params.name}</h2>
            </Col>
            <Col sm={1}>
              <NewTaskModal tasks={tasks} />
            </Col>
          </Row>
        </div>
      );
    }
    return (
      <div>
        <Row>
          <Col sm={11}>
            <h2>{params.name}</h2>
          </Col>
        </Row>
      </div>
    );
  };

  const TableBody: React.FC<{
    tasks: ITask[];
    todo: Boolean;
  }> = ({ tasks, todo }) => {
    const rows = tasks.map((task: any, index: any) => {
      if (todo) {
        return (
          <tr>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td>{task.category}</td>
            <td>
              <Button>Update</Button>
            </td>
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
          <td>
            {moment(
              task.datesUpdated[task.datesUpdated.length - 1].date,
            ).format("MM/DD/YYYY")}
          </td>
        </tr>
      );
    });

    let statusName = "Completed";
    if (params.page === "HomePage") {
      statusName = "Last Updated";
    }

    if (todo) {
      return (
        <div className={styles["table-responsive"]}>
          <Table striped hover>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Update</th>
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
              <th>{statusName}</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    );
  };

  return (
    <Container className={styles.tableComponent}>
      <TableTitle tasks={tasks}/>
      <TableBody tasks={tasks} todo={params.todo} />
    </Container>
  );
}

export default TaskTable;
