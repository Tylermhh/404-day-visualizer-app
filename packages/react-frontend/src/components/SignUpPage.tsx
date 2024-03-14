import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNav from "./Nav/MainNav";
import { Button, Container, Col, Row, Form, Stack } from "react-bootstrap";
import { registerUser } from '../api/AuthHooks'; // Adjust the import path as necessary

function Main() {
  const [username, setUsername] = useState('');
  const [pwd, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await registerUser(username, pwd);
      if (response.ok) {
        console.log('Signup successful');
        navigate('/auth/login');
      } else {
        throw new Error('Signup failed');
      }
    } catch (error) {
      console.error('Signup failed', error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  return (
    <div className="App">
      <MainNav page="SignUp" />
      <Stack gap={5}>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={12} md={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="signup-username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    autoFocus
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="signup-password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={pwd}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" size="lg" type="submit">
                    Sign Up
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Stack>
    </div>
  );
}

export default Main;

