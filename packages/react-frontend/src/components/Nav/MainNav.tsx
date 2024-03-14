import React from 'react'
import styles from './Nav.module.css';
import { Button, Container, Col, Row, Nav, Navbar, Image } from 'react-bootstrap';
import * as data from './links.json'

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links;

type Link = {
    label: string;
    href: string
}

const Links: React.FC<{ links : Link[] }> =({ links }) => {
    return (
        <div className = {styles['links-container']}>
            {links.map((link : Link) => {
                return (
                    <div className = {styles['links']}>
                        <Nav.Item>
                            <Nav.Link href={link.href}>
                                {link.label}
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                )
            })}
        </div>
    )
}

const LandingNav: React.FC<{page : String}> = (input) => {    
    if((input.page === "Home") || (input.page === "Task") || (input.page === "Visualizer")) {
        return (
            <Navbar expand="lg" className = {styles.navbar}>
                <Container>
                    <div>
                        <Row className="align-items-end">
                            <Col>
                                <Image src="/taskcraft-white.svg" width="50px" height="50px" fluid />
                            </Col>
                            <Col>
                            <div className = {styles['logo-container']}>
                                <a className="navbar-brand" href="/">
                                    TaskCraft
                                </a>
                            </div>
                            </Col>
                        </Row>
                    </div>
                    
                    <Nav fill>
                        <Links links = { links }/>
                    </Nav>
                </Container>
            </Navbar>
        )   
    } 

    if((input.page === "Landing")) {
        return (
            <Navbar expand="lg" className = {styles.navbar}>
                <Container>
                    <div>
                        <Row className="align-items-end">
                            <Col>
                                <Image src="/taskcraft-white.svg" width="50px" height="50px" fluid />
                            </Col>
                            <Col>
                            <div className = {styles['logo-container']}>
                                <a className="navbar-brand" href="/">
                                    TaskCraft
                                </a>
                            </div>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col sm={7}>
                            <Button className="navButton" variant="light" href={"/signup"}>
                                Sign Up
                            </Button>
                        </Col>
                        <Col sm={5}>
                            <Button className="navButton" variant="light" href={"/auth/login"}>
                                Login
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        )
    }

    if((input.page === "SignUp") || (input.page === "Login")) {
        return (
            <Navbar expand="lg" className = {styles.navbar}>
                <Container>
                    <div>
                        <Row className="align-items-end">
                            <Col>
                                <Image src="/taskcraft-white.svg" width="50px" height="50px" fluid />
                            </Col>
                            <Col>
                            <div className = {styles['logo-container']}>
                                <a className="navbar-brand" href="/">
                                    TaskCraft
                                </a>
                            </div>
                            </Col>
                        </Row>
                    </div>
                    <Button variant="light" href={"/"}>
                        Back
                    </Button>
                </Container>
            </Navbar>
        )   
    } 

    return (
        <Navbar expand="lg" className = {styles.navbar}>
            <Container>
                <div>
                    <Row className="align-items-end">
                        <Col>
                            <Image src="/taskcraft-white.svg" width="50px" height="50px" fluid />
                        </Col>
                        <Col>
                        <div className = {styles['logo-container']}>
                            <a className="navbar-brand" href="/">
                                TaskCraft
                            </a>
                        </div>
                        </Col>
                    </Row>
                </div>
                <div className = {styles['logo-container']}>
                    Error Nav Bar - Not Supposed to be Here
                </div>
            </Container>
        </Navbar>
    )
}

export default LandingNav
