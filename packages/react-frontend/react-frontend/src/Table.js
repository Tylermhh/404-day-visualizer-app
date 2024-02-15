import React from "react";
import ToggleSwitch from "react-toggle-switch";

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
                    <ToggleSwitch
                      onClick={() => handleToggle(index)}
                      on={row.completed}
                    />
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