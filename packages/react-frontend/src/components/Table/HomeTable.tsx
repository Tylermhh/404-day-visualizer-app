import React, { useState } from 'react';
import styles from "./Table.module.css";
import { Button, Col, Form, Row, Table} from 'react-bootstrap';
import {Task} from "./../../types/types";
import NewTaskModal from '../Modals/NewTaskModal';

interface TableTitleProps {
  addNewItem(): () => void
}

const TableTitle: React.FC<{}> = () => {
  return (
    <div>
      <Row>
        <Col sm={11}>
          <h2>
            Todo List (Coming Up)
          </h2>
        </Col>
        <Col sm={1}>
          {/* button for adding new task */}
          <NewTaskModal/>
        </Col>
      </Row>
    </div>
  )
}

// const TableHeader: React.FC<{}> = () => {
//   return (
//     <div>
//       <thead>
//         <tr>
//           <th>Item Name</th>
//           <th>Category</th>
//           <th>Completed</th>
//           <th>Remove</th>
//         </tr>
//       </thead>
//     </div>
//   )
// }

const TableBody: React.FC<{taskData : Task[]}> = ({taskData}) => {
  const rows = taskData.map((row: any, index: any) => {
      return (
        <tr>
          <td>{row.item_name}</td>
          <td>{row.category}</td>
          <td>
            <Form>
              <Form.Check
                type={'checkbox'}
                id={'compelted'}
              />
            </Form>
          </td>
          <td>
          <Button>
            Delete
          </Button>
          </td>
        </tr>
      );
  });
  
  return (
    <div className = {styles['table-responsive']}>
      <Table striped hover>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Completed</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          { rows }
        </tbody>
      </Table>
    </div>
  );
}

const HomeTable: React.FC<{taskData : Task[]}> = (input) => {

  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setIsModalVisible(!isModalVisible);
  // }

  const [tasks, setTasks] = useState(input.taskData);
  
  return (
    <div>
      <TableTitle />
      <TableBody
        taskData = {input.taskData}
      />

      {/* need to make container work */}
      {/* <OwnModal isOpen={isModalVisible} toggle={toggleModal}>
        <div>Yaay!!! Our Modal is rendered Properly.</div>
      </OwnModal> */}

      {/* <ModalComponent isVisible={isModalVisible} toggleModal={toggleModal}></ModalComponent> */}

      {/* useless */}
      {/* <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal}/> */}

    </div>
  )
}

export default HomeTable
