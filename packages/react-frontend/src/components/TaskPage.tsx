// import React from "react";
"use client";
import { useEffect, useState } from "react";
import MainNav from "./Nav/MainNav";
import TaskTable from "./Table/TaskTable";
// import styles from "./Page.module.css";
import { getAllTasks } from "../api/TaskHooks";
import { Category, ITask } from "./../types/types";
import { userID } from "./User";
import { getUser } from "../api/UserHooks";

let empty_list: ITask[] = [];

let userCategories: Category[] = [
  { name: "Frontend", color: "#0088FE" },
  { name: "Backend", color: "#F098FE" },
  { name: "Other", color: "#FFBB28" },
  { name: "CSC 430", color: "#2BA428" },
  { name: "Physics", color: "#123456" },
];

function Task() {
  const [incompleteTasks, setIncompleteTasks] = useState<ITask[]>(empty_list);
  const [completeTasks, setCompleteTasks] = useState<ITask[]>(empty_list);
  const [categories, setCategories] = useState<Category[]>([]);

  const refreshPage = () => {
    console.log("user categories: ");
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
    getUser(userID)
      .then(res => {
        res.json().then(userObj => {
          setCategories(userObj.categories);
          console.log("categories:", categories);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <MainNav page={"Task"} />
      {/* <header className={styles.pageTitle}>Task Page</header> */}
      <TaskTable
        name="Tasks To Do"
        todo={true}
        page="TaskPage"
        tasks={incompleteTasks}
        categories={categories}
        refreshPage={refreshPage}
      />
      <TaskTable
        name="Tasks Completed"
        todo={false}
        page="TaskPage"
        tasks={completeTasks}
        categories={categories}
        refreshPage={refreshPage}
      />
    </div>
  );
}

export default Task;
