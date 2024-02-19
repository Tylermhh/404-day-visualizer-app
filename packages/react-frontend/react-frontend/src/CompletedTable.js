import React from "react";
import ToggleSwitch from "react-toggle-switch";

function TableHeader() {
    return (
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Category</th>
          <th>Completed</th>
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
            toggleTask={props.toggleTask}
        />
        </table>
    );
}

export default Table;