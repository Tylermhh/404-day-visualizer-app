import React from 'react';
import styles from "./Table.module.css";
import { Button, Col, Form, Row, Table} from 'react-bootstrap';
import Task from "./../../types/types";

const TableTitle: React.FC<{}> = () => {
  return (
    <div>
      {/* <h2>
        Todo List (Coming Up)
      </h2>
      <hr /> */}
      <Row>
        <Col sm={11}>
          <h2>
            Todo List (Coming Up)
          </h2>
        </Col>
        <Col sm={1}>
          <Button variant="outline-primary">
            +
          </Button>
        </Col>
      </Row>
    </div>
  )
}

const TableHeader: React.FC<{}> = () => {
  return (
    <div>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Category</th>
          <th>Completed</th>
          <th>Remove</th>
        </tr>
      </thead>
    </div>
  )
}

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
    <Table striped>
      <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Completed</th>
            <th>Remove</th>
          </tr>
        </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  );
}

const HomeTable: React.FC<{taskData : Task[]}> = (input) => {
  return (
    <div>
      <TableTitle />
      <TableBody
        taskData = {input.taskData}
      />
      {/* <Table striped>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Completed</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table> */}
    </div>
  )
}

export default HomeTable
