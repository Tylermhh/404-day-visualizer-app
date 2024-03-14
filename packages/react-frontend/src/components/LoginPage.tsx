import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import MainNav from "./Nav/MainNav";
import { Button, Container, Col, Row, Form, Stack } from "react-bootstrap";
import { loginUser } from "../api/AuthHooks";
import { useAuth } from "../context/AuthContext"; // This import is for login authentication purposes
import styles from "./Page.module.css";

function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [pwd, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  const { login } = useAuth(); // login is called so that the user remains authenticated while navigating different pages

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { ok, data, error } = await loginUser(username, pwd);
      if (ok && data.token) {
        console.log("Login successful", data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userID", data.userID);
        login(data.token, data.userID); // login(data.token, data.userID) puts the token and userID in local storage
        navigate("/home");
        // Redirect to home on successful login
      } else {
        setMessage("Login failed. Please try again or sign up.");
        // Use the custom error message if provided by loginUser
        throw new Error(error || "Login failed");
      }
    } catch (error) {
      // Log the error message, falling back to a generic message if necessary
      console.error(
        "Login failed",
        error instanceof Error ? error.message : "An unexpected error occurred",
      );
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
          <h4
            style={{
              marginTop: "3em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            {" "}
            {message}
          </h4>
        </Container>
      </Stack>
    </div>
  );
}

export default LoginPage;
