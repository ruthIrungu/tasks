import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [currColor, setCurrColor] = useState<string>("red");

    return (
        <div>
            <div>
                <h3>Change Color</h3>
            </div>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="red"
                    onChange={() => setCurrColor("red")}
                    id="response-red"
                    label="red"
                    style={{ backgroundColor: "red" }}
                    checked={currColor === "red"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="orange"
                    onChange={() => setCurrColor("orange")}
                    id="response-orange"
                    label="orange"
                    style={{ backgroundColor: "orange" }}
                    checked={currColor === "orange"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="yellow"
                    onChange={() => setCurrColor("yellow")}
                    id="response-yellow"
                    label="yellow"
                    style={{ backgroundColor: "yellow" }}
                    checked={currColor === "yellow"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="green"
                    onChange={() => setCurrColor("green")}
                    id="response-green"
                    label="green"
                    style={{ backgroundColor: "green" }}
                    checked={currColor === "green"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="blue"
                    onChange={() => setCurrColor("blue")}
                    id="response-blue"
                    label="blue"
                    style={{ backgroundColor: "blue" }}
                    checked={currColor === "blue"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="amethyst"
                    onChange={() => setCurrColor("amethyst")}
                    id="response-amethyst"
                    label="amethyst"
                    style={{ backgroundColor: "#9966cc" }}
                    checked={currColor === "amethyst"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="purple"
                    onChange={() => setCurrColor("purple")}
                    id="response-purple"
                    label="purple"
                    style={{ backgroundColor: "purple" }}
                    checked={currColor === "purple"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="sage green"
                    onChange={() => setCurrColor("sage green")}
                    id="response-sage-green"
                    label="sage green"
                    style={{ backgroundColor: "#9CAF88" }}
                    checked={currColor === "sage green"}
                />
            </div>
            <div>
                {" "}
                The current color is{" "}
                <span style={{ backgroundColor: currColor }}>
                    {currColor}
                </span>{" "}
            </div>
        </div>
    );
}
