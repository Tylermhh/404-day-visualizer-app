import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";
import Table from "./Table/HomeTable";
import HomePieChart from "./Chart/HomePieChart";
import HomeProgressBar from "./ProgressBar/HomeProgressBar";
import { ITask, CategoryProgress, Category } from "./../types/types";
import { Container, Col, Row, Stack } from "react-bootstrap";
import TaskTable from "./Table/TaskTable";
import LandingNav from "./Nav/LoginNav";

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

// let progressData: CategoryProgress[] = [
//   { name: "Group A", hours: 5, color: "#0088FE" },
//   { name: "Group C", hours: 2, color: "#00C49F" },
//   { name: "Group C", hours: 3, color: "#FFBB28" },
//   { name: "Group D", hours: 4, color: "#FF8042" },
//   { name: "Group E", hours: 1, color: "#a9119c" },
//   { name: "Group F", hours: 2, color: "#5ec1dd" },
// ];

const HomePage: React.FC<{}> = () => {
  const [tasks, setTasks] = useState([]);
// import React, { useState }from 'react';
// import "./Page.module.css"
// // import { Link } from 'react-router-dom';
// import LandingNav from "./Nav/LoginNav";
// import Table from "./Table/HomeTable"
// import HomePieChart from "./Chart/HomePieChart"
// import HomeProgressBar from "./ProgressBar/HomeProgressBar"
// import { Task, Category, DateEntry } from "./../types/types";
// import { Container, Col, Row, Stack } from 'react-bootstrap';

// let tempDateUpdates: DateEntry[] = [
//   {
//     date: new Date("2024-03-01"),
//     hours: 1,
//   },
//   {
//     date: new Date("2024-03-02"),
//     hours: 1,
//   },
//   {
//     date: new Date("2024-03-03"),
//     hours: 1,
//   }
// ]

// let tempDateUpdatesNoTime: DateEntry[] = [
//   {
//     date: new Date("2024-03-04"),
//     hours: 0,
//   }
// ]

// let tempTasks: Task[] = [
//   { 
//     _id: "0",
//     name: "Complete Frontend Tasks",
//     userID: "test_user",
//     description: "N/A",
//     category: "Frontend",
//     priority: "High",
//     datesUpdated: tempDateUpdates,
//     done: true
//   },
//   { 
//     _id: "1",
//     name: "Complete Backend Tasks",
//     userID: "test_user",
//     description: "N/A",
//     category: "Backend",
//     priority: "High",
//     datesUpdated: tempDateUpdates,
//     done: true
//   },
//   { 
//     _id: "2",
//     name: "Get Other Things Done",
//     userID: "test_user",
//     description: "N/A",
//     category: "Other",
//     priority: "Low",
//     datesUpdated: tempDateUpdates,
//     done: true
//   },
//   { 
//     _id: "3",
//     name: "OAZO 7",
//     userID: "test_user",
//     description: "N/A",
//     category: "CSC 430",
//     priority: "Low",
//     datesUpdated: tempDateUpdatesNoTime,
//     done: false
//   },
//   { 
//     _id: "4",
//     name: "Assignment 9",
//     userID: "test_user",
//     description: "N/A",
//     category: "Physics",
//     priority: "Low",
//     datesUpdated: tempDateUpdatesNoTime,
//     done: false
//   },
//   { 
//     _id: "5",
//     name: "Assignment 10",
//     userID: "test_user",
//     description: "N/A",
//     category: "Physics",
//     priority: "Low",
//     datesUpdated: tempDateUpdates,
//     done: false
//   }
// ];

let userCategories: Category[] = [
  { name: "Frontend", color: '#0088FE'},
  { name: "Backend", color: '#F098FE'},
  { name: 'Other', color: '#FFBB28'},
  { name: 'CSC 430', color: '#2BA428'},
  { name: 'Physics', color: '#123456'}
];

// const HomePage: React.FC<{}> = () => {

//   const [tasks, setTasks] = useState(tempTasks);

//   function removeTask(index : number) {
//     const updated = tempTasks.filter((character, i) => {
//         return i !== index;
//     });

//     console.log(tasks.length)
    
//     setTasks(updated);
//   }

  let toDoTasks = [];
  for (let i = 0; i < tempTasks.length; i++) {
    if (!tempTasks[i].done) {
      toDoTasks.push(tempTasks[i]);
    }
  }

  return (
    <div>
      <LandingNav />
      <Stack gap = {4}>
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
                  <HomePieChart 
                    tasks = {tempTasks}
                    categories = {userCategories}/>
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
