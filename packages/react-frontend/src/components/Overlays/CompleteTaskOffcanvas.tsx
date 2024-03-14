import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IDateEntry, ITask } from "../../types/types";
import { updateTask } from '../../api/TaskHooks';
import styles from "./CompleteOffcanvas.module.css";

const CompleteTaskOffcanvas: React.FC<{
    purpose: string;
    message: string;
    done: boolean;
    prompt: string;
    passedTask: ITask;
    refreshPage: () => void;
  }> = (input) => {
  const originalTask = input.passedTask;
  const [show, setShow] = useState(false);
  const [inputHours, setinputHours] = useState(0);
  const [updatedTask, setUpdatedTask] = useState<ITask>(originalTask);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event: any) => {
    const value = event.target.value;
    console.log(value);
    setinputHours(value);
  };

  const handleSubmit = () => {
    const newEntry: IDateEntry =  {date: new Date(), hours: inputHours};
    updatedTask.datesUpdated.push(newEntry);
    if (input.done){
      console.log("done!");
      updatedTask.done = true;
      console.log(updatedTask);
    }
    else{
      setUpdatedTask({ ...updatedTask});
    }
    updateTask(updatedTask).then((res) => console.log(res.json));
    console.log("hook to backend call returned");
    input.refreshPage();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {input.purpose}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{input.message}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formItemName">
                    <Form.Label>{input.prompt}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Hours spent"
                        onChange={e => {
                            handleChange(e);
                        }}
                    />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formItemDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Some more details"
                        onChange={e => {
                            handleChange(e);
                        }}
                    />
                </Form.Group> */}
            </Form>
            <Button variant="primary" onClick={handleSubmit} className={styles.container}>
            Save Changes
            </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CompleteTaskOffcanvas;