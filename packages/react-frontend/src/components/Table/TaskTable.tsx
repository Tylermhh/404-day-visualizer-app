import React from "react";
import { Col, Row, Table, Container } from "react-bootstrap";
import { Category, ITask } from "./../../types/types";
import styles from "../Page.module.css";
import moment from "moment";
import NewTaskModal from "../Modals/NewTaskModal";
import NewCategoryModal from "../Modals/NewCategoryModal";
import CompleteTaskOffcanvas from "../Overlays/CompleteTaskOffcanvas";
import TaskDetailsModal from "../Modals/TaskDetailsModal";
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { IDateEntry } from "./../../types/types";

function TaskTable(params: {
  name: String;
  todo: Boolean;
  page: String;
  tasks: ITask[];
  categories: Category[];
  refreshPage: () => void;
}) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  let tasks = params.tasks;

  const TableTitle: React.FC<{
    tasks: ITask[];
    categories_lst: Category[];
  }> = input => {
    if (params.todo) {
      return (
        <div className={styles["table-title"]}>
          <Row>
            <Col sm={8}>
              <h2>{params.name}</h2>
            </Col>
            <Col sm={3}>
              <NewCategoryModal refreshPage={params.refreshPage} />
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
      <div className={styles["table-title"]}>
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
      if (params.page === "HomePage") {
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
      }
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
                refreshPage={params.refreshPage}
              />
            </td>
            <td>
              <CompleteTaskOffcanvas
                purpose="Complete"
                message="Goodjob finishing that Task!! :D"
                done={true}
                prompt="How many hours did you spend completing the task today?"
                passedTask={task}
                refreshPage={params.refreshPage}
              />
            </td>
            <td>
              <TaskDetailsModal task={task} />
            </td>
            {/* <TaskDetails task={task}/> */}
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
          <td>
            <TaskDetailsModal task={task} />
          </td>
        </tr>
      );
    });

    let statusName = "Completed";
    if (params.page === "HomePage") {
      statusName = "Last Updated";
      return (
        <div className={styles["table-responsive"]}>
          <Table striped hover>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </div>
      );
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
                <th>More Info</th>
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
              <th>More Info</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    );
  };

  // const TaskDetails: React.FC<{
  //   task: ITask;
  // }> = (input) => {

  //   const task = input.task;

  //   return (
  //     <>
  //       <Offcanvas show={show} onHide={handleClose}>
  //         <Offcanvas.Header closeButton>
  //           <Offcanvas.Title>{`Task Name : ${task.name}`}</Offcanvas.Title>
  //         </Offcanvas.Header>
  //         <Offcanvas.Body>
  //           <p>{`Task ID : ${task._id}`}</p>
  //           <p>{`Description : ${task.description}`}</p>
  //           <p>{`Category : ${task.category}`}</p>
  //           <p>{`Priority : ${task.priority}`}</p>
  //           <p>{`Completed? : ${task.done}`}</p>
  //           <p>{`Deadline : ${task.deadline}`}</p>
  //           <p>{`Date Created : ${task.createdAt}`}</p>
  //           <p>{`Dates Updated : ${task.datesUpdated}`}</p>
  //         </Offcanvas.Body>
  //       </Offcanvas>
  //     </>
  //   );
  // }

  return (
    <Container className={styles.tableComponent}>
      <TableTitle tasks={tasks} categories_lst={params.categories} />
      <TableBody tasks={tasks} todo={params.todo} />
    </Container>
  );
}

export default TaskTable;
