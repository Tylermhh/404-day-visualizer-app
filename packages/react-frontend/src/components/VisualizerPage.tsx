import React, { useState } from "react";
import MainNav from "./Nav/MainNav";
import { Container, Col, Form, Row, Stack } from 'react-bootstrap';
import VisualizerNumberTasksPerCategoryPieChart from "./Chart/VisualizerNumberTasksPerCategoryPieChart"
import VisualizerHoursSpentPerCategoryPieChart from "./Chart/VisualizerHoursSpentPerCategoryPieChart"
import VisualizerHoursSpentPerTaskBarChart from "./Chart/VisualizerHoursSpentPerTaskBarChart";
import {tempTasks, userCategories} from "./../TempData"

function GetDateString(date : Date) : string {
  let year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();

  if(date.getMonth() < 10) {
    month = "0" + month;
  }
  
  if(date.getDate() < 10) {
    day = "0" + day;
  }

  return year + "-" + month + "-" + day;
}

function VisualizerType(value : any) {
  const [category, setCategory] = useState('');
  const handleSelectCategory=(e : any)=>{
    console.log(e);
    setCategory(e.target.value)
  }

  if (value.value === '2') {
    return (
      <Container className="d-flex justify-content-center">
        <VisualizerHoursSpentPerCategoryPieChart tasks={tempTasks} categories={userCategories} />
      </Container>
    )
  }
  else if (value.value === '3'){
    return (
      <Container>
        <Row>
          <Col sm={4} />
          <Col sm={4}>
            <Form>
              <Form.Select value={category} onChange={handleSelectCategory}>
                {userCategories.map((categories, index) => (<option value={index}>{categories.name}</option>))}
              </Form.Select>
            </Form>
          </Col>
          <Col sm={4} />
        </Row>
        <Container className="d-flex justify-content-center">
          <VisualizerHoursSpentPerTaskBarChart tasks={tempTasks} categories={userCategories} category={category}/>
        </Container>
      </Container>
    )
  } else {
    return (
      <Container className="d-flex justify-content-center">
        <VisualizerNumberTasksPerCategoryPieChart tasks={tempTasks} categories={userCategories} />
      </Container>
    )
  }
}

function Visualizer() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [visualizer, setVisualizer] = useState('');
  const handleSelectVisualizer=(e : any)=>{
    console.log(e);
    setVisualizer(e.target.value)
  }

  let startDateString = GetDateString(startDate);
  let endDateString = GetDateString(endDate);

  if(startDate > endDate) {
    setEndDate(startDate)
  }

  return (
    <div className="App">
      <MainNav 
        page = { "Visualizer" }
      />
      <Stack gap = {3}>
        <Container />
        <Container>
          <Row>
            <Col sm={4}>
              <Form>
                <Form.Select value={visualizer} onChange={handleSelectVisualizer}>
                  <option value="1">Number of Tasks Per Category</option>
                  <option value="2">Hours Spent Per Category</option>
                  <option value="3">Average Hours Spent Per Task</option>
                </Form.Select>
              </Form>
            </Col>
            <Col sm={4}>
              <Form>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={startDateString}
                  onChange={(e) => setStartDate(new Date(e.target.value))}
                />
              </Form>
            </Col>
            <Col sm={4}>
              <Form>
                <Form.Control
                  type="date"
                  name="endDate"
                  value={endDateString}
                  min={startDateString}
                  onChange={(e) => setEndDate(new Date(e.target.value))}
                />
              </Form>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <text>
              {startDateString}
            </text>
            <text>
              {endDateString}
            </text>
          </Row>
          <Row>
            <VisualizerType value={visualizer}/>
          </Row>
        </Container>
      </Stack>
    </div>
  );
}
 
export default Visualizer;