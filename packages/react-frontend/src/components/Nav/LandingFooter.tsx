import React from 'react'
import styles from './Nav.module.css';
import {Container, Navbar} from 'react-bootstrap'

const Footer: React.FC<{}> = (input) => {    
    return (
        <Navbar expand="lg" className = {styles.navbar}>
            <Container>
                <div className = {styles['logo-container']}>
                    <p className="navbar-brand">
                        TaskCraft by 404
                    </p>
                </div>
            </Container>
        </Navbar>
    )
}

export default Footer
