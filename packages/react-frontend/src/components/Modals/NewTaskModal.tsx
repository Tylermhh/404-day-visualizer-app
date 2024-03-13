import { useState } from "react";
import { DropdownDivider, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Category, ITask } from "../../types/types";
import { postTask } from "../../api/TaskHooks";

const NewTaskModal: React.FC<{
  tasks: ITask[];
  categories: Category[];
}> = input => {
  // const empty_IDateEntry: IDateEntry[] = [];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTask, setNewTask] = useState<ITask>({
    _id: "",
    name: "",
    userID: "65d1d1bfe907b971e50b2cca",
    description: "",
    category: "null",
    createdAt: new Date(),
    datesUpdated: [{ date: new Date(), hours: 0 }],
    done: false,
    deadline: new Date(),
  });

  const handleChange = (field: any, event: any) => {
    const value = event.target.value;
    console.log(value);

    setNewTask({ ...newTask, [field]: value });
  };

  const handleSubmit = () => {
    console.log(newTask);
    postTask(newTask);

    console.log(newTask);

    toggleModal();
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

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
            <Form.Group className="mb-3" controlId="formItemName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item Name"
                onChange={e => {
                  handleChange("name", e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formItemDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Some more details"
                onChange={e => {
                  handleChange("description", e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formItemCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select
                onChange={e => {
                  handleChange("category", e);
                }}>
                {input.categories.map((entry, index) => (
                  <option value={entry.name}>{entry.name}</option>
                ))}
                <DropdownDivider></DropdownDivider>
                <option>Add new category</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formItemDeadline">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                type="date"
                onChange={e => {
                  handleChange("deadline", e);
                }}
              />
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

export default NewTaskModal;
