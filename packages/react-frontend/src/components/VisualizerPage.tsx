import React, { useState, useEffect } from "react";
import MainNav from "./Nav/MainNav";
import { Container, Col, Form, Row, Stack } from "react-bootstrap";
import VisualizerNumberTasksPerCategoryPieChart from "./Chart/VisualizerNumberTasksPerCategoryPieChart";
import VisualizerHoursSpentPerCategoryPieChart from "./Chart/VisualizerHoursSpentPerCategoryPieChart";
import VisualizerHoursSpentPerTaskBarChart from "./Chart/VisualizerHoursSpentPerTaskBarChart";
import VisualizerCompletedNotCompletedTasksPerCategoryBarChart from "./Chart/VisualizerCompletedNotCompletedTasksPerCategoryBarChart";
import { ITask } from "./../types/types";
import { userCategories } from "./../TempData";
import { getTasks } from "../api/TaskHooks";

function GetDateString(date: Date): string {
  let year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();

  if (date.getMonth() < 10) {
    month = "0" + month;
  }

  if (date.getDate() < 10) {
    day = "0" + day;
  }

  return year + "-" + month + "-" + day;
}

function VisualizerType(value: string, allTasks: ITask[]) {
  const [category, setCategory] = useState("");
  const handleSelectCategory = (e: any) => {
    console.log(e);
    setCategory(e.target.value);
  };

  if (value === "2") {
    return (
      <Container className="d-flex justify-content-center">
        <VisualizerHoursSpentPerCategoryPieChart
          tasks={allTasks}
          categories={userCategories}
        />
      </Container>
    );
  } else if (value === "3") {
    return (
      <Container>
        <Row>
          <Col sm={4} />
          <Col sm={4}>
            <Form>
              <Form.Select value={category} onChange={handleSelectCategory}>
                {userCategories.map((categories, index) => (
                  <option value={index}>{categories.name}</option>
                ))}
              </Form.Select>
            </Form>
          </Col>
          <Col sm={4} />
        </Row>
        <Container className="d-flex justify-content-center">
          <VisualizerCompletedNotCompletedTasksPerCategoryBarChart
            tasks={allTasks}
            categories={userCategories}
            category={category}
          />
        </Container>
      </Container>
    );
  } else if (value === "4") {
    return (
      <Container>
        <Row>
          <Col sm={4} />
          <Col sm={4}>
            <Form>
              <Form.Select value={category} onChange={handleSelectCategory}>
                {userCategories.map((categories, index) => (
                  <option value={index}>{categories.name}</option>
                ))}
              </Form.Select>
            </Form>
          </Col>
          <Col sm={4} />
        </Row>
        <Container className="d-flex justify-content-center">
          <VisualizerHoursSpentPerTaskBarChart
            tasks={allTasks}
            categories={userCategories}
            category={category}
          />
        </Container>
      </Container>
    );
  } else {
    return (
      <Container className="d-flex justify-content-center">
        <VisualizerNumberTasksPerCategoryPieChart
          tasks={allTasks}
          categories={userCategories}
        />
      </Container>
    );
  }
}

function Visualizer() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleDateChange = (e:any, dateSet : React.Dispatch<React.SetStateAction<Date>>) => {
    console.log(e)

    let date = new Date(e.target.value)
    date.setDate(date.getDate() + 1)

    dateSet(date);
  }

  const [visualizer, setVisualizer] = useState("");
  const handleSelectVisualizer = (e: any) => {
    console.log(e);
    setVisualizer(e.target.value);
  };

  let empty_list: ITask[] = [];
  const [completeTasks, setCompleteTasks] = useState<ITask[]>(empty_list);
  const [incompleteTasks, setIncompleteTasks] = useState<ITask[]>(empty_list);

  let startDateString = GetDateString(startDate);
  let endDateString = GetDateString(endDate);

  if (startDate > endDate) {
    setEndDate(startDate);
  }

  useEffect(() => {
    getTasks((localStorage.getItem('userID') as string), startDate, endDate)
      .then(tasks => {
        tasks.json().then(data => {
          setCompleteTasks(data.done);
          setIncompleteTasks(data.notDone);
        });
      })
      .catch(err => {
        console.error(err);
      });
  });

  return (
    <div className="App">
      <MainNav page={"Visualizer"} />
      <Stack gap={3}>
        <Container />
        <Container>
          <Row>
            <Col sm={4}>
              <Form>
                <Form.Select
                  value={visualizer}
                  onChange={handleSelectVisualizer}>
                  <option value="1">Number of Tasks per Category</option>
                  <option value="2">Hours Spent per Category</option>
                  <option value="3">Completed and Not Completed Tasks per Category</option>
                  <option value="4">Average Hours Spent Per Task per Category</option>
                </Form.Select>
              </Form>
            </Col>
            <Col sm={1}>
              <text style={{ fontSize: "122%" }}>Start Date</text>
            </Col>
            <Col sm={3}>
              <Form>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={startDateString}
                  onChange={e => handleDateChange(e, setStartDate)}
                />
              </Form>
            </Col>
            <Col sm={1}>
              <text style={{ fontSize: "122%" }}>End Date</text>
            </Col>
            <Col sm={3}>
              <Form>
                <Form.Control
                  type="date"
                  name="endDate"
                  value={endDateString}
                  min={startDateString}
                  onChange={e => handleDateChange(e, setEndDate)}
                />
              </Form>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            {VisualizerType(visualizer, completeTasks.concat(incompleteTasks))}
          </Row>
        </Container>
      </Stack>
    </div>
  );
}

export default Visualizer;
