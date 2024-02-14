import React from "react";
import "./App.css";
import Landscape from "C:/Users/ruthi/tasks/src/assets/art-institute-of-chicago-w9njMDJJ3c4-unsplash.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h2> With Neil Irungu</h2>
            <Container>
                <Row>
                    <Col style={{ border: "1px solid blue", padding: "10px" }}>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                        <img
                            className="landscape"
                            src={Landscape}
                            width="200"
                            height="100"
                            alt="Landscape Date: n.d. Artist: Attributed to George Inness American, 1825-1894"
                        />
                    </Col>
                    <Col style={{ border: "1px solid red", padding: "10px" }}>
                        <p>
                            Hello World! How are you doing today? Some ideas to
                            make your day special:
                        </p>
                        <ul>
                            <li> Get a little treat </li>
                            <li> Take a nap</li>
                            <li> Talk to a friend </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
