import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ICategory } from "../../types/types";
import userID from "../User";

const NewCategoryModal: React.FC<{
  refreshPage: () => void;
}> = input => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const [newCategory, setNewCategory] = useState<ICategory>({
    name: "",
    color: "",
  });

  const handleChange = (field: any, event: any) => {
    const value = event.target.value;
    console.log(value);
    setNewCategory({ ...newCategory, [field]: value });
  };

  const handleSubmit = () => {
    // postCategory(newCategory);
    toggleModal();
    input.refreshPage();
  };

  return (
    <>
      <Button variant="outline-primary" onClick={toggleModal}>
        Create New Category
      </Button>

      <Modal show={isModalVisible} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formCategoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                onChange={e => {
                  handleChange("name", e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategoryolor">
              <Form.Select>
                <option>Choose Color</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
                <option value="green">Green</option>
                <option value="light green">Light Green</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="red">Red</option>
                <option value="pink">Pink</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewCategoryModal;
