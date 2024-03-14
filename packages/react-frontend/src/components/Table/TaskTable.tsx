import React from "react";
import { Col, Row, Table, Container } from "react-bootstrap";
import { Category, ITask } from "./../../types/types";
import styles from "../Page.module.css";
import moment from "moment";
import NewTaskModal from "../Modals/NewTaskModal";
import CompleteTaskOffcanvas from "../Overlays/CompleteTaskOffcanvas";
// import { IDateEntry } from "./../../types/types";

function TaskTable(params: {
  name: String;
  todo: Boolean;
  page: String;
  tasks: ITask[];
  categories: Category[];
  refreshPage: () => void;
}) {
  let tasks = params.tasks;

  const TableTitle: React.FC<{
    tasks: ITask[];
    categories_lst: Category[];
  }> = input => {
    if (params.todo) {
      return (
        <div>
          <Row>
            <Col sm={11}>
              <h2>{params.name}</h2>
            </Col>
            <Col sm={1}>
              <NewTaskModal
                tasks={tasks}
                categories={input.categories_lst}
                refreshPage={params.refreshPage}
              />
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
              <CompleteTaskOffcanvas
                purpose="Update" 
                message={`Dont worry about not finishing it today! \nKeep up the good work! :D`}
                done={false}
                prompt="How many hours did you spend on the task today?"
                passedTask={task} 
                refreshPage={params.refreshPage}/>
            </td>
            <td>
              <CompleteTaskOffcanvas 
                purpose="Complete"
                message="Goodjob finishing that Task!! :D" 
                done = {true}
                prompt="How many hours did you spend completing the task today?"
                passedTask={task} 
                refreshPage={params.refreshPage}/>
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
      <TableTitle tasks={tasks} categories_lst={params.categories} />
      <TableBody tasks={tasks} todo={params.todo} />
    </Container>
  );
}

export default TaskTable;
