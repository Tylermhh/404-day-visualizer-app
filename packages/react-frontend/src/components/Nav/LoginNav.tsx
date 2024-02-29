import React from 'react'
import styles from './Nav.module.css';
import { Button, Container, Nav, Navbar, Modal} from 'react-bootstrap';
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

const LandingNav: React.FC<{}> = () => {    
    return (
        <Navbar expand="lg" className = {styles.navbar}>
            <Container>
                <div className = {styles['logo-container']}>
                    <a className="navbar-brand" href="">
                        TaskCraft
                    </a>
                </div>
                <Nav fill>
                    <Links links = {links}/>
                </Nav>
                <div>
                    <Button variant="light">
                        Sign Up
                    </Button>
                    <Button variant="light">
                        Login
                    </Button>
                </div>
            </Container>
        </Navbar>
    )
}

export default LandingNav