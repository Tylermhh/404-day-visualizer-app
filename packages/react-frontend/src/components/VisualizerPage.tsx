import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from "./Nav/MainNav";
import { Container, Col, Dropdown, DropdownButton, Row, Stack } from 'react-bootstrap';
 
function Visualizer() {
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
              <DropdownButton id="dropdown-item-button" title="Dropdown button">
                <Dropdown.Item eventKey="1">
                  Action
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">
                  Active Item
                </Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col sm={8}>
            </Col>
          </Row>
        </Container>
      </Stack>
    </div>
  );
}
 
export default Visualizer;