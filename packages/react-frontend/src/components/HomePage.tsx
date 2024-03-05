import React from 'react';
import "./Page.module.css"
// import { Link } from 'react-router-dom';
import Nav from "./Nav/Nav";
import Table from "./Table/HomeTable"
import HomePieChart from "./Chart/HomePieChart"
import HomeProgressBar from "./ProgressBar/HomeProgressBar"
import { Task, CategoryProgress } from "./../types/types";
import { Container, Col, Row, Stack } from 'react-bootstrap';

let tempTasks: Task[] = [
  { item_name: "Make Frontend", category: "Frontend", completed: false },
  { item_name: "Make Backend", category: "Backend", completed: false},
  { item_name: "Make Frontend", category: "Frontend", completed: false },
  { item_name: "Make Backend", category: "Backend", completed: true},
  { item_name: "Make Frontend", category: "Frontend", completed: false },
  { item_name: "Make Backend", category: "Backend", completed: true},
  { item_name: "Make Frontend", category: "Frontend", completed: false },
  { item_name: "Make Backend", category: "Backend", completed: true},
  { item_name: "Make Frontend", category: "Frontend", completed: false },
  { item_name: "Make Backend", category: "Backend", completed: true},
  { item_name: "Make Frontend", category: "Frontend", completed: false },
  { item_name: "Make Backend", category: "Backend", completed: true},
  { item_name: "Make Frontend", category: "Frontend", completed: false },
  { item_name: "Make Backend", category: "Backend", completed: true},
  { item_name: "Make Frontend", category: "Frontend", completed: false },
  { item_name: "Make Backend", category: "Backend", completed: true},
  { item_name: "Make Frontend", category: "Frontend", completed: false },
  { item_name: "Make Backend", category: "Backend", completed: true},
];

let progressData: CategoryProgress[] = [
  { category_name: 'Group A', hours: 5, color: '#0088FE'},
  { category_name: 'Group C', hours: 2, color: '#00C49F'},
  { category_name: 'Group C', hours: 3, color: '#FFBB28'},
  { category_name: 'Group D', hours: 4, color: '#FF8042'},
  { category_name: 'Group E', hours: 1, color: '#a9119c'},
  { category_name: 'Group F', hours: 2, color: '#5ec1dd'}
];

const HomePage: React.FC<{}> = () => {

  // const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Nav />
      <Stack gap = {4}>
        <Container />
        <Container>
          <Row>
            <Col sm={9}>
              <Table 
                taskData = {tempTasks}
              />
            </Col>
            <Col sm={3}>
              <Stack gap = {4}>
                <Container>
                  <HomePieChart 
                    category_progress={progressData}/>
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