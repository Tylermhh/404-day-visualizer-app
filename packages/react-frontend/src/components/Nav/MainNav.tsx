import React from 'react'
import styles from './Nav.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
                    <div className = {styles['logo-container']}>
                        <a className="navbar-brand" href="/">
                            TaskCraft
                        </a>
                    </div>
                    <Nav fill>
                        <Links links = { links }/>
                    </Nav>
                </Container>
            </Navbar>
        )   
    } 
    return (
        <Navbar expand="lg" className = {styles.navbar}>
            <Container>
                <div className = {styles['logo-container']}>
                    <a className="navbar-brand" href="/">
                        TaskCraft
                    </a>
                </div>
                <Nav fill>
                    <Links links = { links }/>
                </Nav>
            </Container>
        </Navbar>
    )
    
}

export default LandingNav