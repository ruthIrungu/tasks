import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [currAttempts, setCurrAttempts] = useState<number>(3);
    const [reqattempts, setReqAttempts] = useState<number>(0);

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setReqAttempts(parseInt(event.target.value));
    }

    function useAttempt() {
        setCurrAttempts(currAttempts - 1);
    }

    function gainAttempt() {
        setCurrAttempts(currAttempts + reqattempts);
    }
    return (
        <div>
            <div>
                <h3>Give Attempts</h3>
            </div>
            <div>The current number of attempts is {currAttempts}.</div>
            <Form.Group controlId="attempts">
                <Form.Label>Requested attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqattempts}
                    onChange={updateAttempts}
                />
            </Form.Group>
            <div>
                <Button onClick={useAttempt} disabled={currAttempts === 0}>
                    Use{" "}
                </Button>
                <Button onClick={gainAttempt}>Gain </Button>
            </div>
        </div>
    );
}
