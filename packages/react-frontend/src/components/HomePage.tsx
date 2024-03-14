//import React, { useState }from 'react';
"use client";
import React, { useState, useEffect } from "react";
import MainNav from "./Nav/MainNav";
import TaskTable from "./Table/TaskTable";
import HomePieChart from "./Chart/HomePieChart";
import HomeProgressBar from "./ProgressBar/HomeProgressBar";
import { ITask } from "./../types/types";
import { Container, Col, Row, Stack } from "react-bootstrap";
import { getTasks } from "../api/TaskHooks";
import { userCategories } from "./../TempData"
import userID from "./User";


const HomePage: React.FC<{}> = () => {
  const emptyRefresh = () => {};

  const today: Date = new Date();
  let empty_list: ITask[] = [];
  const [completeTasks, setCompleteTasks] = useState<ITask[]>(empty_list);
  const [incompleteTasks, setIncompleteTasks] = useState<ITask[]>(empty_list);

  useEffect(() => {
    getTasks(
      userID,
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
  });

  return (
    <div>
      <MainNav page={ "Home" } />
      <Stack gap={4}>
        <Container />
        <Container>
          <Row>
            <Col sm={9}>
              <TaskTable
                name="Today's To-Do List"
                todo={false}
                page="HomePage"
                tasks={ incompleteTasks }
                categories={ userCategories }
                refreshPage={ emptyRefresh }
              />
            </Col>
            <Col sm={3}>
              <Stack gap={4}>
                <Container>
                  <HomePieChart
                    tasks={ incompleteTasks }
                    categories={ userCategories }
                  />
                </Container>
                <Container>
                  <HomeProgressBar taskData={completeTasks.concat(incompleteTasks)} />
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
