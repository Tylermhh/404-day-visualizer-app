import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ICategory } from "../../types/types";
import { userCategories } from "../User";

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
    let value = event.target.value;
    console.log(value);
    if (field === "color") {
      switch (value) {
        case "Blue": {
          value = "#3480eb";
          break;
        }
        case "Purple": {
          value = "#9b34eb";
          break;
        }
        case "Green": {
          value = "#14b339";
          break;
        }
        case "Light Green": {
          value = "#89d63c";
          break;
        }
        case "Yellow": {
          value = "#ede326";
          break;
        }
        case "Orange": {
          value = "#fab623";
          break;
        }
        case "Red": {
          value = "#fa583c";
          break;
        }
        case "Pink": {
          value = "#f08bc1";
          break;
        }
      }
    }
    setNewCategory({ ...newCategory, [field]: value });
  };

  const handleSubmit = () => {
    userCategories.push(newCategory);
    console.log("user categories after new: ", userCategories);

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
              <Form.Select
                onChange={e => {
                  handleChange("color", e);
                }}>
                <option>Choose Color</option>
                <option value="Blue">Blue</option>
                <option value="Purple">Purple</option>
                <option value="Green">Green</option>
                <option value="Light Green">Light Green</option>
                <option value="Yellow">Yellow</option>
                <option value="Orange">Orange</option>
                <option value="Red">Red</option>
                <option value="Pink">Pink</option>
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
