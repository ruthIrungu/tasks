import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [currColor, setCurrColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrColor(event.target.value);
    }

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
                    onChange={updateColor}
                    id="response-red"
                    label="red"
                    style={{ backgroundColor: "red" }}
                    checked={currColor === "red"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="orange"
                    onChange={updateColor}
                    id="response-orange"
                    label="orange"
                    style={{ backgroundColor: "orange" }}
                    checked={currColor === "orange"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="yellow"
                    onChange={updateColor}
                    id="response-yellow"
                    label="yellow"
                    style={{ backgroundColor: "yellow" }}
                    checked={currColor === "yellow"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="green"
                    onChange={updateColor}
                    id="response-green"
                    label="green"
                    style={{ backgroundColor: "green" }}
                    checked={currColor === "green"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="blue"
                    onChange={updateColor}
                    id="response-blue"
                    label="blue"
                    style={{ backgroundColor: "blue" }}
                    checked={currColor === "blue"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="amethyst"
                    onChange={updateColor}
                    id="response-amethyst"
                    label="amethyst"
                    style={{ backgroundColor: "#9966cc" }}
                    checked={currColor === "amethyst"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="purple"
                    onChange={updateColor}
                    id="response-purple"
                    label="purple"
                    style={{ backgroundColor: "purple" }}
                    checked={currColor === "purple"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="sage green"
                    onChange={updateColor}
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
