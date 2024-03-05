import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";
import Table from "./Table/HomeTable";
import HomePieChart from "./Chart/HomePieChart";
import HomeProgressBar from "./ProgressBar/HomeProgressBar";
import { ITask, CategoryProgress } from "./../types/types";
import { Container, Col, Row, Stack } from "react-bootstrap";
import TaskTable from "./Table/TaskTable";

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
    done: false,
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

let progressData: CategoryProgress[] = [
  { category_name: "Group A", hours: 5, color: "#0088FE" },
  { category_name: "Group C", hours: 2, color: "#00C49F" },
  { category_name: "Group C", hours: 3, color: "#FFBB28" },
  { category_name: "Group D", hours: 4, color: "#FF8042" },
  { category_name: "Group E", hours: 1, color: "#a9119c" },
  { category_name: "Group F", hours: 2, color: "#5ec1dd" },
];

const HomePage: React.FC<{}> = () => {
  const [tasks, setTasks] = useState([]);

  let toDoTasks = [];
  for (let i = 0; i < tempTasks.length; i++) {
    if (!tempTasks[i].done) {
      toDoTasks.push(tempTasks[i]);
    }
  }

  return (
    <div>
      <Nav />
      <Stack gap={4}>
        <Container />
        <Container>
          <Row>
            <Col sm={9}>
              <TaskTable
                name="To-Do List"
                todo={false}
                page="HomePage"
                tasks={toDoTasks}
              />
            </Col>
            <Col sm={3}>
              <Stack gap={4}>
                <Container>
                  <HomePieChart category_progress={progressData} />
                </Container>
                <Container>
                  <HomeProgressBar taskData={tempTasks} />
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
