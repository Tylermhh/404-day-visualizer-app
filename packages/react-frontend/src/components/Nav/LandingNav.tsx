import React from 'react'
import styles from './Nav.module.css';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
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
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href={link.href}>
                                    {link.label}
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                )
            })}
        </div>
    )
}

const LandingNav: React.FC<{}> = () => {
    return (
        <Navbar expand="lg" className = {styles.navbar}>
            <Container>
                <Navbar.Brand href="">TaskCraft</Navbar.Brand>
                <Links links = {links}/>
            </Container>
        </Navbar>
    )
}

export default LandingNav