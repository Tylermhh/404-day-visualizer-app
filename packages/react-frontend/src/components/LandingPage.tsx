import React from 'react';
import styles from "./Page.module.css";
import MainNav from "./Nav/MainNav";
import { Container, Col, Row, Stack } from 'react-bootstrap';

function Main() {
    return (
    <div className = {styles['table-responsive']}>
        <MainNav
            page = { "Landing" }
        />
        <Stack gap = {5}>
            <Container />
            <Container />
            <Container />
            <Container className={styles['page-text']}>
                <Row>
                    <Col sm={2} />
                    <Col sm={8}>
                            <h1>
                                TaskCraft
                            </h1>
                        </Col>
                    <Col sm={2} />
                </Row>
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
                <Row>
                    <Col sm={12}>
                        <h4>
                            Taskcraft is an app design to help individuals gain a better understanding of their time spending habits. 
                            Keeping track of time can get hard, especially if you have a lot of thing going on all at once, 
                            like having various projects or homework assignments you need to get done. The purpose of Taskcraft is to help you ke
                            ep track of your time and help you visualize how you spend it. By having various ways to keep track of how long you 
                            work on certain tasks or how often you work on one subset of tasks compared to another, Taskcraft provides various 
                            visualization methods, like hours spent per category, to help you gain an understanding on how you spend most of 
                            your time.
                        </h4>
                    </Col>
                </Row>
            </Container>
        </Stack>
    </div>
    );
}
 
export default Main;