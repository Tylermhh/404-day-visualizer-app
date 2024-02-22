import React from "react";

function TableTitle() {
  return (
    <thead>
      <tr>
        <h2>Todo List (Coming Up)</h2>
      </tr>
    </thead>
  );
}

function TableHeader() {
    return (
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Category</th>
          <th>Completed</th>
          <th>Remove</th>
        </tr>
      </thead>
    );
  }
  
function TableBody(props) {
    const handleToggle = (index) => {
      props.toggleTask(index);
    };

    const rows = props.taskData.map((row, index) => {
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

function Table(props) {

    return (
        <table>
        <TableTitle />
        <TableHeader />
        <TableBody 
            taskData = {props.taskData}
            removeTask = {props.taskData}
            toggleTask={props.toggleTask}
        />
        </table>
    );
}

export default Table;