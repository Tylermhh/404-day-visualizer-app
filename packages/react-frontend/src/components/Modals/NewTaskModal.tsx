import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import NewTaskForm from '../Forms/NewTaskForm';
import { Task } from '../../types/types';

function NewTaskModal() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [characters, setCharacters] = useState();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  }

  // function updateList(task) {
  //   setCharacters([...characters, task]);
  //   // postUser(person)
  //   // .then((res) => { 
  //   //   if (res.status === 201) {
  //   //     console.log("status 201!");
  //   //     setCharacters([...characters, res.json()])}
  //   //   })
  //   // .catch((error) => {
  //   //   console.log(error);
  //   // })
  // }

  interface UpdateListProps {
    characters: Task[];
    // setCharacters: React.Dispatch<React.SetStateAction<Task[]>>;
  }

  // const updateList = async (newTask: Task, { characters, setCharacters }: UpdateListProps) => {
  //   setCharacters([...characters, newTask]);
  //   // try {
  //   //   const res = await postUser(person);
  
  //   //   if (res.status === 201) {
  //   //     const newPerson = await res.json();
  //   //     console.log("status 201!");
  //   //     setCharacters([...characters, newPerson]);
  //   //   }
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // };

    return (
        <>

          <Button variant="outline-primary" onClick={toggleModal}>
            +
          </Button>

          <Modal show={isModalVisible} onHide={toggleModal}>
            <Modal.Header closeButton>
            <Modal.Title>Add New Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className='mb-3' controlId='formItemName'>
                  <Form.Label>Item Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter Item Name" />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formItemDescription'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="description" placeholder="Some more details" />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formItemDeadline'>
                  <Form.Label>Category</Form.Label>
                  <Form.Select>
                    <option>Academics</option>
                    <option>Sports</option>
                    <option>Business</option>
                    <option>Fun</option>
                    <option>Add new category</option>                    
                  </Form.Select>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formItemDeadline'>
                  <Form.Label>Deadline</Form.Label>
                  <Form.Control type="deadline" placeholder="yyyy-mm-dd" />
                </Form.Group>

              </Form>

              {/* <NewTaskForm handleSubmit={updateList}/> */}

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={toggleModal}>
                Close
              </Button>
              <Button variant="primary" onClick={toggleModal}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default NewTaskModal;