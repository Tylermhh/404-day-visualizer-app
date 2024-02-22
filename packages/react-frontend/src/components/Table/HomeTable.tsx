import React from 'react'
import { Flex, Text, Button, Box, Grid, ScrollArea, Table } from '@radix-ui/themes';

const TableTitle: React.FC<{}> = () => {
  return (
    <thead>
      <tr>
        <h2>Todo List (Coming Up)</h2>
      </tr>
    </thead>
  )
}

const TableHeader: React.FC<{}> = () => {
  return (
    <thead>
        <tr>
          <th>Item Name</th>
          <th>Category</th>
          <th>Completed</th>
          <th>Remove</th>
        </tr>
      </thead>
  )
}

const TableBody: React.FC<{props: any}> = ({props}) => {
  const handleToggle = (index : any) => {
    props.toggleTask(index);
  };

  const rows = props.taskData.map((row: any, index: any) => {
      return (
          <tr key = {index}>
              <td>{row.name}</td>
              <td>{row.category}</td>
              <td> 
                <input type="checkbox" id="completed" />
              </td>
              <td>
                <button onClick={() => props.removeTask(index)}>
                  Delete
                  </button>
              </td>
          </tr>
      );
  });
  return (
    <tbody>
      {rows}
      </tbody>
  );
}

const HomeTable: React.FC<{}> = () => {
  return (
    <table>
      <TableTitle />
    </table>
  )
}

export default HomeTable
