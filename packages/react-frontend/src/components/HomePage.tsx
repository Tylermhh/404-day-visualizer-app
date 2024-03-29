//import React, { useState }from 'react';
import React, { useState, useEffect } from "react";
import MainNav from "./Nav/MainNav";
import TaskTable from "./Table/TaskTable";
import HomePieChart from "./Chart/HomePieChart";
import HomeProgressBar from "./ProgressBar/HomeProgressBar";
import { Category, ITask } from "./../types/types";
import { Container, Col, Row, Stack } from "react-bootstrap";
import { getTasks } from "../api/TaskHooks";
import { getUser } from "./../api/UserHooks";

const HomePage: React.FC<{}> = () => {
  const emptyRefresh = () => {};
  console.log(localStorage.getItem("userID"));

  const [completeTasks, setCompleteTasks] = useState<ITask[]>([]);
  const [incompleteTasks, setIncompleteTasks] = useState<ITask[]>([]);

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(
    (today = new Date()) => {
      getTasks(
        (localStorage.getItem('userID') as string),
        today,
        new Date(
          today.getFullYear().toString() +
            "-" +
            (today.getMonth() + 1).toString() +
            "-" +
            (today.getDate() + 1).toString(),
        ),
      )
        .then(tasks => {
          tasks.json().then(data => {
            setCompleteTasks(data.done);
            setIncompleteTasks(data.notDone);
          });
        })
        .catch(err => {
          console.error(err);
        });
    },
    [],
  );

    useEffect(() => {
      getUser((localStorage.getItem('userID') as string))
      .then(res => {
        res.json().then(data => {
          setCategories(data.categories);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <MainNav page={"Home"} />
      <Stack gap={4}>
        <Container />
        <Container>
          <Row>
            <Col sm={8}>
              <TaskTable
                name="Today's To-Do List"
                todo={false}
                page="HomePage"
                tasks={incompleteTasks}
                categories={categories}
                refreshPage={emptyRefresh}
              />
            </Col>
            <Col sm={4}>
              <Stack gap={1}>
                <text>Number of Tasks Completed</text>
                <Container>
                  <HomePieChart tasks={completeTasks} categories={categories} />
                </Container>
                <Container>
                  <HomeProgressBar
                    taskData={completeTasks.concat(incompleteTasks)}
                  />
                </Container>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Stack>
    </div>
  );
};

export default HomePage;
