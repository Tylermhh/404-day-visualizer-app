import React, { useState } from "react";
import MainNav from "./Nav/MainNav";
import { Container, Col, Button, Form, Row, Stack } from 'react-bootstrap';
import VisualizerNumberTasksPerCategoryPieChart from "./Chart/VisualizerNumberTasksPerCategoryPieChart"
import {tempTasks, userCategories} from "./../TempData"

function VisualizerType(value : any) {
  const [category, setCategory] = useState('');
  const handleSelectCategory=(e : any)=>{
    console.log(e);
    setCategory(e.target.value)
  }

  if (value.value === '1') {
    return (
      <Container className="d-flex justify-content-center">
        <VisualizerNumberTasksPerCategoryPieChart tasks={tempTasks} categories={userCategories} />
      </Container>
    )
  }
  else if (value.value === '2'){
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
      </Container>
    )
  } else {
    return (
      <text>
        {`Visualization ${value.value}`}
      </text>
    )
  }
}

function Visualizer() {
  const [date, setDate] = useState(new Date());

  const [visualizer, setVisualizer] = useState('');
  const handleSelectVisualizer=(e : any)=>{
    console.log(e);
    setVisualizer(e.target.value)
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
                  <option value="2">Average Hours Spent Per Task</option>
                </Form.Select>
              </Form>
            </Col>
            <Col sm={4}>
              <Form>
                <Form.Control
                  type="date"
                  name="startDate"
                  placeholder="DateRange"
                  value={date.toUTCString()}
                  onChange={(e) => setDate(new Date(e.target.value))}
                />
              </Form>
            </Col>
            <Col sm={4}>
              <Form>
                <Form.Control
                  type="date"
                  name="endDate"
                  placeholder="DateRange"
                  value={date.toUTCString()}
                  onChange={(e) => setDate(new Date(e.target.value))}
                />
              </Form>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <VisualizerType value={visualizer}/>
          </Row>
        </Container>
      </Stack>
    </div>
  );
}
 
export default Visualizer;