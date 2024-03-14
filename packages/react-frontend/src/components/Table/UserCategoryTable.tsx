import React from 'react';
import styles from "./Table.module.css";
import { Col, Row, Table} from 'react-bootstrap';
import { Category } from "./../../types/types";

const TableTitle: React.FC<{}> = () => {
  return (
    <div>
      <Row>
        <Col sm={12}>
          <text>
            User Categories
          </text>
        </Col>
      </Row>
    </div>
  )
}

const TableBody: React.FC<{categories : Category[]}> = (input) => {
  const rows = input.categories.map((row: any, index: any) => {
      return (
        <tr>
            <td>{row.name}</td>
            {/* <div className = {styles['color-box']}>
                <td>
                    <div className = {styles["color-" + row.color]}>
                        <span> </span> 
                        <text>
                            {row.color}
                        </text>
                    </div>
                </td>
            </div> */}
        </tr>
      );
  });
  
  return (
    <div className = {styles['table-responsive']}>
      <Table striped hover>
        <thead>
          <tr>
            <th>Category</th>
            {/* <th>Color</th> */}
          </tr>
        </thead>
        <tbody>
          { rows }
        </tbody>
      </Table>
    </div>
  );
}

const UserCategoryTable: React.FC<{categories : Category[]}> = (input) => {
  return (
    <div>
      <TableBody
        categories = {input.categories}
      />
    </div>
  )
}

export default UserCategoryTable
