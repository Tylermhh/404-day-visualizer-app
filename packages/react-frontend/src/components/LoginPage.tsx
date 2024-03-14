import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNav from "./Nav/MainNav";
import { Button, Container, Col, Row, Form, Stack } from "react-bootstrap";
import { loginUser } from '../api/AuthHooks';
import { AuthProvider, useAuth } from '../context/AuthContext';

function LoginPage() {
  const [username, setUsername] = useState<string>('');
  const [pwd, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      const { ok, data, error } = await loginUser(username, pwd);
      if (ok && data.token) {
        console.log('Login successful', data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('userID', data.userID);
        console.log(data.userID)
        login(data.token, data.userID); // Update your login method to optionally handle user ID
        navigate('/home');
        // Redirect to home on successful login
      } else {
        // Use the custom error message if provided by loginUser
        throw new Error(error || 'Login failed');
      }
    } catch (error) {
      // Log the error message, falling back to a generic message if necessary
      console.error('Login failed', error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };


    return (
      <div className="App">
        <MainNav page="Login" />
        <Stack gap={5}>
          <Container /> 
          <Container>
            <Row className="justify-content-md-center">
              <Col sm={12} md={6}>
                {" "}
                {/* Adjust the column sizing as needed */}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="login-username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      autoFocus
                      value={username}
                      onChange={e => setUsername(e.target.value)} 
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="login-password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={pwd}
                      onChange={e => setPassword(e.target.value)} 
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    {" "}
                    <Button variant="primary" size="lg" type="submit">
                      Login
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
 
export default LoginPage;
