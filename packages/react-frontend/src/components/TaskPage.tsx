// import React from "react";
"use client";
import { useEffect, useState } from "react";
import MainNav from "./Nav/MainNav";
import TaskTable from "./Table/TaskTable";
// import styles from "./Page.module.css";
import { getAllTasks } from "../api/TaskHooks";
import { Category, ITask } from "./../types/types";
import { getUser } from "../api/UserHooks";

let empty_list: ITask[] = [];

function Task() {
  const [incompleteTasks, setIncompleteTasks] = useState<ITask[]>(empty_list);
  const [completeTasks, setCompleteTasks] = useState<ITask[]>(empty_list);
  const [categories, setCategories] = useState<Category[]>([]);

  const refreshPage = () => {
    let promiseTask = false;
    let promiseCategory = false;
    console.log("user categories: ");
    getAllTasks(localStorage.getItem("userID") as string)
      .then(response => response.json())
      .then(data => {
        setIncompleteTasks(data.notDone);
        setCompleteTasks(data.done);
        console.log("refreshing and getting done data");
        console.log(data.done);
        promiseTask = true;
      })
      .then(()=> {
        getUser(localStorage.getItem("userID") as string)
        .then(res => res.json())
        .then(data => {
          setCategories(data.categories);
        })
        .catch(err => {
          console.error(err);
        })})
      .then(() => {
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllTasks(localStorage.getItem("userID") as string)
      .then(response => response.json())
      .then(data => {
        setIncompleteTasks(data.notDone);
        setCompleteTasks(data.done);
      });
    getUser(localStorage.getItem("userID") as string)
      .then(res => {
        res.json().then(userObj => {
          setCategories(userObj.categories);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

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
