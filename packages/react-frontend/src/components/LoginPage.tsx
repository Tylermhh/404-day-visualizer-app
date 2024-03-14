import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNav from "./Nav/MainNav";
import { Button, Container, Col, Row, Form, Stack} from "react-bootstrap";
import axios from 'axios'; 

function Main() {
  // State for the username and password inputs
  const [username, setUsername] = useState('');
  const [pwd, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/auth/login', {
        username,
        pwd,
      });

      console.log('Login successful', response.data);
      navigate('/home');
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            // Now TypeScript knows this is an AxiosError, you can access error.response safely
            console.error('Login failed', error.response?.data || error.message);
        } else if (error instanceof Error) {
            // This is a generic JavaScript Error
            console.error('Login failed', error.message);
        } else {
            // For other types, you might not be sure what the structure is
            console.error('An unexpected error occurred');
        }
    }
};

    return (
      <div className="App">
        <MainNav page="Login" />
        <Stack gap={5}>
          <Container /> {/* This empty Container might be for spacing. Consider removing if unnecessary. */}
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
                      onChange={e => setUsername(e.target.value)} // Update state when the input changes
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="login-password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={pwd}
                      onChange={e => setPassword(e.target.value)} // Update state when the input changes
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    {" "}
                    {/* Center the button */}
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
 
export default Main;
