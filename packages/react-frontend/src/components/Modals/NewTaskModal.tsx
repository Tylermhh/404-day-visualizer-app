import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function NewTaskModal() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  }

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
                  <Form.Control type="itemName" placeholder="Enter Item Name" />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formItemDescription'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="itemDescription" placeholder="Some more details" />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formItemDeadline'>
                  <Form.Label>Deadline</Form.Label>
                  <Form.Control type="itemDeadline" placeholder="yyyy-mm-dd" />
                </Form.Group>

              </Form>

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