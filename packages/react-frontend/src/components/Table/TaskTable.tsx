import React from 'react';
import styles from "./Table.module.css";
import { Button, Col, Form, Row, Table} from 'react-bootstrap';
import {Task} from "./../../types/types";


const TableHeader: React.FC<{}> = () => {
    return (
      <div>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Category</th>
            <th>Completed</th>
            <th>Deadline</th>
            <th>Remove</th>
          </tr>
        </thead>
      </div>
    )
  }

  const TaskTable: React.FC<{taskData : Task[]}> = (input) => {
    return (
      <div>
        <TableTitle />
        <TableBody
          taskData = {input.taskData}
        />
      </div>
    )
  }
  
  export default TaskTable