import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currOption, setCurrOption] = useState<string>(options[0]);
    const [correct, setCorrect] = useState<string>("❌");

    function updateOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrOption(event.target.value);
        if (currOption === expectedAnswer) {
            setCorrect("✔️");
        } else {
            setCorrect("❌");
        }
    }

    return (
        <div>
            <div>
                <h3>Multiple Choice Question</h3>
            </div>
            <div>
                <Form.Group controlId="multipleChoice">
                    <Form.Label>Which option?</Form.Label>
                    <Form.Select value={currOption} onChange={updateOption}>
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {" "}
                                option{" "}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>{correct}</div>
            </div>
        </div>
    );
}
