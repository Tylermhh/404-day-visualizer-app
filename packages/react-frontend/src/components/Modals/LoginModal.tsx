import React, { useState } from 'react';
import { Button, Form, Modal } from "react-bootstrap";

const LoginModal: React.FC<{}> = (input) => {    
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
          <Button variant="light" onClick={handleShow}>
            Login
          </Button>

          <Modal centered show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form>
                      <Form.Group className="mb-3" controlId="signup-username">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                              type="username"
                              placeholder="username"
                              autoFocus
                          />
                          </Form.Group>
                      <Form.Group className="mb-3" controlId="signup-password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control 
                              type="password"
                              placeholder="password"/>
                      </Form.Group>
                      
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                      Cancel
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                      Sign Up
                  </Button>
              </Modal.Footer>
          </Modal>
      </>
  )
}

export default LoginModal