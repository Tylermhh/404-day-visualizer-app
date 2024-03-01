import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Page.module.css";
// import Nav from "./Nav/Nav";
import LandingNav from "./Nav/LoginNav";
import { Container, Col, Row, Stack } from 'react-bootstrap';

function Main() {
    // const navigate = useNavigate();

    // const goToAuthenticationPageComp = () => {
    //     navigate('/auth');
    // };

    // const goToHomePageComp = () => {
    //     navigate('/home');
    // };

    // const goToTaskPageComp = () => {
    //     navigate('/task');
    // };

    // const goToVisualizePageComp = () => {
    //     navigate('/visualize');
    // }
    
    return (
    <div className = {styles['table-responsive']}>
        {/* <Nav /> */}
        <LandingNav />
        <Stack gap = {3}>
            <Container />
            <Container />
            <Container>
                <Row>
                    <Col sm={2}>
                    </Col>
                    <Col sm={8}>
                        <h1>
                            TaskCraft
                        </h1>
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={12}>
                        <h4>
                            For STEM students who aren't and wish to be aware of how they spend their time, 
                            TaskCraft is a time management and visualizer app that serves as a motivating to-do list. 
                            Unlike built-in “to-do lists” our product analyzes how long each item took you to visualize 
                            how you spent your time that day and motivates you to be more productive.
                        </h4>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={4}>
                        <h1>
                            Images of app
                        </h1>
                    </Col>
                    <Col sm={4}>
                        <h1>
                            Images of app
                        </h1>
                    </Col>
                    <Col sm={4}>
                        <h1>
                            Images of app
                        </h1>
                    </Col>
                </Row>
            </Container>
        </Stack>
    </div>
    );
}
 
export default Main;