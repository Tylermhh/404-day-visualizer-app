import MainNav from "./Nav/MainNav";
import { Button, Container, Col, Row, Form, Stack} from "react-bootstrap";

function Main() { 
    return (
        <div className="App">
            <MainNav
                page = { "Auth" }
            />
            <Stack gap = {5}>
                <Container />
                <Container>
                    <Row>
                        <Col sm={3}>
                        </Col>
                        <Col sm={6}>
                            <Form>
                                <Form.Group className="mb-3" controlId="signup-username">
                                    <Form.Label>Username</Form.Label>
                                        <Form.Control   
                                            type="username"
                                            placeholder="Username"
                                            autoFocus
                                        />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="signup-password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password"
                                        placeholder="Password"/>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={3}>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}>
                        </Col>
                        <Col sm={6}>
                            <Button variant="primary" size="lg">
                                Block level button
                            </Button>
                        </Col>
                        <Col sm={1}>
                        </Col>
                    </Row>
                </Container>
            </Stack>
        </div>
    );
}
 
export default Main;