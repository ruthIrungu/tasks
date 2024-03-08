import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setAns] = useState<string>("");
    const [correct, setCorrect] = useState<string>("❌");

    function updateAns(event: React.ChangeEvent<HTMLInputElement>) {
        setAns(event.target.value);
        if (ans === expectedAnswer) {
            setCorrect("✔️");
        } else {
            setCorrect("❌");
        }
    }

    return (
        <div>
            <div>
                <h3>Check Answer</h3>
            </div>
            <Form.Group controlId="formAnswerCheck" as={Row}>
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={ans} onChange={updateAns} />
            </Form.Group>
            <div>The answer is {ans}.</div>
            <div>{correct}</div>
        </div>
    );
}
