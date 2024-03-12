import React, { useState } from "react";
import MainNav from "./Nav/MainNav";
import { Container, Col, Dropdown, DropdownButton, Form, Row, Stack } from 'react-bootstrap';
import VisualizerNumberTasksPerCategoryPieChart from "./Chart/VisualizerNumberTasksPerCategoryPieChart"
import {tempTasks, userCategories} from "./../TempData"

function VisualizerType(value : any) {
  if (value.toString() === '1') {
    return <VisualizerNumberTasksPerCategoryPieChart tasks={tempTasks} categories={userCategories} />
  } else {
    return (
      <Container className="d-flex justify-content-center">
        <VisualizerNumberTasksPerCategoryPieChart tasks={tempTasks} categories={userCategories} />;
      </Container>
    )
  }
}
 
function Visualizer() {
  const [date, setDate] = useState(new Date());

  const [value, setValue] = useState('');
  const handleSelect=(e : any)=>{
    console.log(e);
    setValue(e.toString())
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
              <DropdownButton id="dropdown-item-button" title="Visualization Method" onSelect={handleSelect}>
                <Dropdown.Item eventKey="1">
                  Number of Tasks / Category
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" as="button">
                  Hours / Task
                </Dropdown.Item>
              </DropdownButton>
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
            <VisualizerType value={value}/>
          </Row>
        </Container>
      </Stack>
    </div>
  );
}
 
export default Visualizer;