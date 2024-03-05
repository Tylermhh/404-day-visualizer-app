import React from "react";
import Navbar from "./Nav/Nav";
import TaskTable from "./Table/TaskTable";
import { ITask } from "./../types/types";
import styles from "./Page.module.css";

let tempTasks: ITask[] = [
  {
    _id: "tempID100",
    name: "Make backend",
    userID: "Johnny123",
    description: "Add pie chart",
    createdAt: new Date("2024-01-16"),
    datesUpdated: [
      {
        date: new Date("2024-01-16"),
        hours: 0,
      },
      {
        date: new Date("2024-01-18"),
        hours: 7,
      },
      {
        date: new Date("2024-01-20"),
        hours: 3,
      },
    ],
    category: "Academics",
    done: true,
  },
  {
    _id: "tempID200",
    name: "Make backend",
    userID: "Maxwell Smooth",
    description: "Add backend",
    createdAt: new Date("2024-01-14"),
    datesUpdated: [
      {
        date: new Date("2024-01-14"),
        hours: 0,
      },
      {
        date: new Date("2024-01-18"),
        hours: 1,
      },
    ],
    category: "Academics",
    done: true,
  },
  {
    _id: "tempID300",
    name: "Sell clothes",
    userID: "Johnny123",
    description: "Sell clothes at Dexter Lawn",
    createdAt: new Date("2024-01-24"),
    datesUpdated: [
      {
        date: new Date("2024-01-24"),
        hours: 0,
      },
    ],
    category: "Business",
    done: false,
  },
];

function Task() {
  let completedTasks = [];
  let toDoTasks = [];
  for (let i = 0; i < tempTasks.length; i++) {
    if (tempTasks[i].done) {
      completedTasks.push(tempTasks[i]);
    } else {
      toDoTasks.push(tempTasks[i]);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <header className={styles.pageTitle}>Task Page</header>
      <TaskTable name="Tasks To Do" todo={true} tasks={toDoTasks} />
      <TaskTable name="Tasks Completed" todo={false} tasks={completedTasks} />
    </div>
  );
}

export default Task;
