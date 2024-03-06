import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz() {
        setAttempts(attempts - 1);
        setInProgress(true);
    }

    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    function stopQuiz(): void {
        setInProgress(false);
    }
    return (
        <div>
            <div>
                Number of Attempts: <span>{attempts}</span>
            </div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={inProgress === true || attempts === 0}
                >
                    Start Attempt
                </Button>
                <Button onClick={stopQuiz} disabled={inProgress === false}>
                    Stop Attempt
                </Button>
            </div>
            <div>
                <Button onClick={mulligan} disabled={inProgress === true}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
