import React from 'react'
import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import * as data from './links.json'

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links;

// type Link = {
//     label: string;
//     href: string
// }

// const Links: React.FC<{ links : Link[] }> =({ links }) => {
//     return (
//         <div className = {styles['links-container']}>
//             {links.map((link : Link) => {
//                 return (
//                     <div className = {styles['links']}>
//                         <Nav.Item>
//                             <Nav.Link href={link.href}>
//                                 {link.label}
//                             </Nav.Link>
//                         </Nav.Item>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

const LandingNav: React.FC<{}> = () => {    
    return (
        <Navbar expand="lg" className = {styles.navbar}>
            <Container>
                <div className = {styles['logo-container']}>
                    <a className="navbar-brand" href="https://thankful-dune-0d41a831e.5.azurestaticapps.net/">
                        TaskCraft
                    </a>
                </div>
                {/* <Nav fill>
                    <Links links = { links }/>
                </Nav> */}
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/task">Task</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/visualize">Vizualize</Nav.Link>
                    </Nav.Item>
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