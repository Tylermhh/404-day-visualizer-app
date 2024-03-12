import React, { useState } from "react";
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
              <DropdownButton id="dropdown-item-button" title="Visualization Method">
                <Dropdown.Item eventKey="1" as="button">
                  Number of Tasks / Category
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" as="button">
                  Hours / Task
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