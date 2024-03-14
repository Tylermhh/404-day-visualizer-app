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
  });

  return (
    <div className="App">
      <MainNav page={"Task"} />
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
