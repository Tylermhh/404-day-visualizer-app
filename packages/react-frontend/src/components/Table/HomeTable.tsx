import React from 'react';
import styles from "./Table.module.css";
import { Button, Col, Form, Row, Table} from 'react-bootstrap';
import {Task} from "./../../types/types";
import NewTaskModal from '../Modals/NewTaskModal';

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
          <NewTaskModal/>
        </Col>
      </Row>
    </div>
  )
}

const TableBody: React.FC<{taskData : Task[], removeTask: (index: number) => void}> = ({taskData, removeTask}) => {
  const rows = taskData.map((row: any, index: any) => {
      return (
        <tr>
          <td>{row.name}</td>
          <td>{row.category}</td>
          <td>
            <Form>
              <Form.Check
                type={'checkbox'}
                id={'completed'}
              />
            </Form>
          </td>
          <td>
          <Button onClick={() => removeTask(index)}>
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

const HomeTable: React.FC<{taskData : Task[], removeTask: (index: number) => void}> = (input) => {
  return (
    <div>
      <TableTitle/>
      <TableBody
        taskData = {input.taskData}
        removeTask={input.removeTask}
      />
    </div>
  )
}

export default HomeTable
