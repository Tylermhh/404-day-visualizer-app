import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IDateEntry, ITask } from "../../types/types";

const TaskDetailsModal: React.FC<{
  task: ITask;
}> = input => {

    const task = input.task;
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const formatter = new Intl.DateTimeFormat("en-US", {
  //   day: "2-digit",
  //   month: "2-digit",
  //   year: "numeric",
  // });
  // const createdAtFormat = formatter.format(task.createdAt);
  const createdString = task.createdAt.toString();
  const new_created = new Date(createdString);
  const new_created_string = new_created.toDateString();

  const deadlineString = task.createdAt.toString();
  const new_deadline = new Date(deadlineString);
  const new_deadline_string = new_deadline.toDateString();
  
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <Button variant="outline-primary" onClick={toggleModal}>
        Details
      </Button>

      <Modal show={isModalVisible} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{`Task Name : ${task.name}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>{`Task ID : ${task._id}`}</p>
            <p>{`Description : ${task.description}`}</p>
            <p>{`Category : ${task.category}`}</p>
            <p>{`Priority : ${task.priority}`}</p>
            <p>{`Completed? : ${task.done}`}</p>
            <p>{`Deadline : ${new_deadline_string}`}</p>
            <p>{`Date Created : ${new_created_string}`}</p>
            <p>{`Dates Updated :`} </p> 
            <p>{`[`} </p> 
             {task.datesUpdated.map((elem: IDateEntry, index: any) => 
            {
              const updateString = elem.date.toString();
              const new_update = new Date(updateString);
              const new_update_string = new_update.toDateString();
              return (
                <p>{`${new_update_string} => ${elem.hours} hours`}</p>
              );
            })}
            <p>{`]`} </p> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskDetailsModal;
