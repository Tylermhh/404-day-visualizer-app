import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav/Nav";
import Table from "./Table/HomeTable"

import Task from "./../types/types";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let tempTasks: Task[];
// const tempTasks = [
//   {
//     name: "Make Frontend",
//     category: "CSC 307",
//     completed: false
//   },
//   {
//     name: "Make Backend",
//     category: "CSC 307",
//     completed: true
//   }
// ];

const HomePage: React.FC<{}> = () => {

  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Nav />
      {/* <div className = "container">
        <div className = "flex-row">
          <div className = "flex-small">
            <Table />
          </div>
        </div>
      </div> */}
      <Container>
        <Row>
          <Col sm={8}>
            <Table />
          </Col>
          <Col sm={4}>
            sm=4
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage