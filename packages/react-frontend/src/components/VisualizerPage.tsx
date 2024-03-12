import React, { useState } from "react";
import MainNav from "./Nav/MainNav";
import { Container, Col, Form, Row, Stack } from 'react-bootstrap';
import VisualizerNumberTasksPerCategoryPieChart from "./Chart/VisualizerNumberTasksPerCategoryPieChart"
import {tempTasks, userCategories} from "./../TempData"

function VisualizerType(value : any) {
  if (value.value === '1') {
    return <VisualizerNumberTasksPerCategoryPieChart tasks={tempTasks} categories={userCategories} />
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

  const [value, setValue] = useState('');
  const handleSelect=(e : any)=>{
    console.log(e);
    setValue(e.target.value)
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
                <Form.Select value={value} onChange={handleSelect}>
                  <option value="1">Number of Tasks / Category</option>
                  <option value="2">Hours / Task</option>
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
          </Row>
        </Container>
        <Container>
          <Row>
            <Container className="d-flex justify-content-center">
              <VisualizerType value={value}/>
            </Container>
          </Row>
        </Container>
      </Stack>
    </div>
  );
}
 
export default Visualizer;