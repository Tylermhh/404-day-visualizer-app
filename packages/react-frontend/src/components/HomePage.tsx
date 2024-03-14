//import React, { useState }from 'react';
"use client";
import React, { useState, useEffect } from "react";
import HomePieChart from "./Chart/HomePieChart";
import HomeProgressBar from "./ProgressBar/HomeProgressBar";
import { ITask, Category } from "./../types/types";
import { Container, Col, Row, Stack } from "react-bootstrap";
import TaskTable from "./Table/TaskTable";
import MainNav from "./Nav/MainNav";
import { getTasks } from "../api/TaskHooks";
import userID from "./User";

let userCategories: Category[] = [
  { name: "Frontend", color: "#0088FE" },
  { name: "Backend", color: "#F098FE" },
  { name: "Other", color: "#FFBB28" },
  { name: "CSC 430", color: "#2BA428" },
  { name: "Physics", color: "#123456" },
  { name: "Business", color: "#234324" },
  { name: "Academic", color: "#f3e2r1" },
];

const HomePage: React.FC<{}> = () => {
  const emptyRefresh = () => {};

  const today: Date = new Date();
  let empty_list: ITask[] = [];
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
          setIncompleteTasks(data.notDone);
        });
      })
      .catch(err => {
        console.error(err);
      });
  });

  return (
    <div>
      <MainNav page={"Home"} />
      <Stack gap={4}>
        <Container />
        <Container>
          <Row>
            <Col sm={9}>
              <TaskTable
                name="Today's To-Do List"
                todo={false}
                page="HomePage"
                tasks={incompleteTasks}
                categories={userCategories}
                refreshPage={emptyRefresh}
              />
            </Col>
            <Col sm={3}>
              <Stack gap={4}>
                <Container>
                  <HomePieChart
                    tasks={incompleteTasks}
                    categories={userCategories}
                  />
                </Container>
                <Container>
                  <HomeProgressBar taskData={incompleteTasks} />
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
