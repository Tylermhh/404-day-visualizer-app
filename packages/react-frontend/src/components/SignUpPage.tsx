import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNav from "./Nav/MainNav";
import { Button, Container, Col, Row, Form, Stack } from "react-bootstrap";
import axios from 'axios';

function Main() {
  const [username, setUsername] = useState('');
  const [pwd, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:8000/auth/signup', {
        username,
        pwd,
      });

      console.log('Signup successful');
      navigate('/home');
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Signup failed', error.response?.data || error.message);
      } else if (error instanceof Error) {
        console.error('Signup failed', error.message);
      } else {
        console.error('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="App">
      <MainNav page="SignUp" />
      <Stack gap={5}>
        <Container /> {/* This empty Container might be for spacing. Consider removing if unnecessary. */}
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
