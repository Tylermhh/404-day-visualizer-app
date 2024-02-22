import React from 'react'
import styles from "./Table.module.css"

type Task = {
  item_name: string;
  category: string;
  completed: boolean;
}

const TableTitle: React.FC<{}> = () => {
  return (
    <div>
      <thead>
        <h1>
          Todo
          </h1>
        </thead>
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
    <table className = {styles.table}>
      <TableTitle />
      <TableHeader />
    </table>
  )
}

export default HomeTable
