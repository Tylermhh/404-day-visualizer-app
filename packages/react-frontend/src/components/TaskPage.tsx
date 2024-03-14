// import React from "react";
"use client";
import { getAllTasks } from "../api/TaskHooks";
import MainNav from "./Nav/MainNav";
import TaskTable from "./Table/TaskTable";
import { Category, ITask } from "./../types/types";
import styles from "./Page.module.css";
import { useEffect, useState } from "react";
// import { getTasks } from "../api/TaskHooks";
// import userID from "./User";

let empty_list: ITask[] = [];

let userCategories: Category[] = [
  { name: "Frontend", color: "#0088FE" },
  { name: "Backend", color: "#F098FE" },
  { name: "Other", color: "#FFBB28" },
  { name: "CSC 430", color: "#2BA428" },
  { name: "Physics", color: "#123456" },
];

function Task() {
  // const [doneTasksList, setDoneTasksList] = useState([]);
  // const [toDoTasksList, setToDoTasksList] = useState([]);

  // useEffect(() => {
  //   getTasks(userID, new Date(), new Date())
  //     .then(res => res.json())
  //     .then(json => {
  //       setToDoTasksList(json.notDone);
  //       setDoneTasksList(json.done);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  const userID = "65eb04d403116e2e8c60f63e";
  const [incompleteTasks, setIncompleteTasks] = useState<ITask[]>(empty_list);
  const [completeTasks, setCompleteTasks] = useState<ITask[]>(empty_list);

  const refreshPage = () => {
    getAllTasks(userID)
      .then(response => response.json())
      .then(data => {
        setIncompleteTasks(data.notDone);
        setCompleteTasks(data.done);
        console.log("refreshing and getting done data");
        console.log(data.done);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllTasks(userID)
      .then(response => response.json())
      .then(data => {
        setIncompleteTasks(data.notDone);
        setCompleteTasks(data.done);
      });
  }, []);

  // let completedTasks = [];
  // let toDoTasks = [];
  // for (let i = 0; i < tempTasks.length; i++) {
  //   if (tempTasks[i].done) {
  //     completedTasks.push(tempTasks[i]);
  //   } else {
  //     toDoTasks.push(tempTasks[i]);
  //   }
  // }

  return (
    <div className="App">
      <MainNav page={"Task"} />
      <header className={styles.pageTitle}>Task Page</header>
      <TaskTable
        name="Tasks To Do"
        todo={true}
        page="TaskPage"
        // tasks={toDoTasksList}
        tasks={incompleteTasks}
        categories={userCategories}
        refreshPage={refreshPage}
      />
      <TaskTable
        name="Tasks Completed"
        todo={false}
        page="TaskPage"
        // tasks={doneTasksList}
        tasks={completeTasks}
        categories={userCategories}
        refreshPage={refreshPage}
      />
    </div>
  );
}

export default Task;
