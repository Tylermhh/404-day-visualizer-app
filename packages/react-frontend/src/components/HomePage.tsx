import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav/Nav";
import Table from "./Table/HomeTable"
import Task from "./../types/types";
import { Container, Col, Row, Stack } from 'react-bootstrap';

let tempTasks: Task[] = [
  {
    item_name: "Make Frontend",
    category: "CSC 307",
    completed: false
  },
  {
    item_name: "Make Backend",
    category: "CSC 307",
    completed: true
  },
  {
    item_name: "Make Frontend",
    category: "CSC 307",
    completed: false
  },
  {
    item_name: "Make Backend",
    category: "CSC 307",
    completed: true
  },
  {
    item_name: "Make Frontend",
    category: "CSC 307",
    completed: false
  },
  {
    item_name: "Make Backend",
    category: "CSC 307",
    completed: true
  },
  {
    item_name: "Make Frontend",
    category: "CSC 307",
    completed: false
  },
  {
    item_name: "Make Backend",
    category: "CSC 307",
    completed: true
  },
  {
    item_name: "Make Frontend",
    category: "CSC 307",
    completed: false
  },
  {
    item_name: "Make Backend",
    category: "CSC 307",
    completed: true
  },
  {
    item_name: "Make Frontend",
    category: "CSC 307",
    completed: false
  },
  {
    item_name: "Make Backend",
    category: "CSC 307",
    completed: true
  }
];

const HomePage: React.FC<{}> = () => {

  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Nav />
      <Stack gap = {4}>
        <Container />
        <Container>
          <Row>
            <Col sm={8}>
              <Table 
                taskData = {tempTasks}
              />
            </Col>
            <Col sm={4}>
              Side Graph
            </Col>
          </Row>
        </Container>
      </Stack>
    </div>
  )
}

export default HomePage