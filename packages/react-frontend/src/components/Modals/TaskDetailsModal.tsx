import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ITask } from "../../types/types";

const TaskDetailsModal: React.FC<{
  task: ITask;
}> = input => {

    const task = input.task;
  const [isModalVisible, setIsModalVisible] = useState(false);
  
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
            <p>{`Deadline : ${task.deadline}`}</p>
            <p>{`Date Created : ${task.createdAt}`}</p>
            <p>{`Dates Updated : ${task.datesUpdated}`}</p>  
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
