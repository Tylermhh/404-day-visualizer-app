import React, { useState }from 'react';
import "./Page.module.css"
// import { Link } from 'react-router-dom';
import LandingNav from "./Nav/LoginNav";
import Table from "./Table/HomeTable"
import HomePieChart from "./Chart/HomePieChart"
import HomeProgressBar from "./ProgressBar/HomeProgressBar"
import { Task, Category, DateEntry } from "./../types/types";
import { Container, Col, Row, Stack } from 'react-bootstrap';

let tempDateUpdates: DateEntry[] = [
  {
    date: new Date("2024-03-01"),
    hours: 1,
  },
  {
    date: new Date("2024-03-02"),
    hours: 1,
  },
  {
    date: new Date("2024-03-03"),
    hours: 1,
  }
]

let tempDateUpdatesNoTime: DateEntry[] = [
  {
    date: new Date("2024-03-04"),
    hours: 0,
  }
]

let tempTasks: Task[] = [
  { 
    _id: "0",
    name: "Complete Frontend Tasks",
    userID: "test_user",
    description: "N/A",
    category: "Frontend",
    priority: "High",
    datesUpdated: tempDateUpdates,
    done: true
  },
  { 
    _id: "1",
    name: "Complete Backend Tasks",
    userID: "test_user",
    description: "N/A",
    category: "Backend",
    priority: "High",
    datesUpdated: tempDateUpdates,
    done: true
  },
  { 
    _id: "2",
    name: "Get Other Things Done",
    userID: "test_user",
    description: "N/A",
    category: "Other",
    priority: "Low",
    datesUpdated: tempDateUpdates,
    done: true
  },
  { 
    _id: "3",
    name: "OAZO 7",
    userID: "test_user",
    description: "N/A",
    category: "CSC 430",
    priority: "Low",
    datesUpdated: tempDateUpdatesNoTime,
    done: false
  },
  { 
    _id: "4",
    name: "Assignment 9",
    userID: "test_user",
    description: "N/A",
    category: "Physics",
    priority: "Low",
    datesUpdated: tempDateUpdatesNoTime,
    done: false
  },
  { 
    _id: "5",
    name: "Assignment 10",
    userID: "test_user",
    description: "N/A",
    category: "Physics",
    priority: "Low",
    datesUpdated: tempDateUpdates,
    done: false
  }
];

let userCategories: Category[] = [
  { name: "Frontend", color: '#0088FE'},
  { name: "Backend", color: '#F098FE'},
  { name: 'Other', color: '#FFBB28'},
  { name: 'CSC 430', color: '#2BA428'},
  { name: 'Physics', color: '#123456'}
];

const HomePage: React.FC<{}> = () => {

  const [tasks, setTasks] = useState(tempTasks);

  function removeTask(index : number) {
    const updated = tempTasks.filter((character, i) => {
        return i !== index;
    });

    let temp = tasks;
    
    setTasks(updated);
  }

  return (
    <div>
      <LandingNav />
      <Stack gap = {4}>
        <Container />
        <Container>
          <Row>
            <Col sm={9}>
              <Table 
                taskData = {tempTasks}
                removeTask={removeTask}
              />
            </Col>
            <Col sm={3}>
              <Stack gap = {4}>
                <Container>
                  <HomePieChart 
                    tasks = {tempTasks}
                    categories = {userCategories}/>
                  </Container>
                <Container>
                  <HomeProgressBar 
                    taskData = {tempTasks}/>     
                </Container>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Stack>
    </div>
  )
}

export default HomePage