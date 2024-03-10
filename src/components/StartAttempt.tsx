import React, { useState } from "react";
//import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function startQuiz() {
        setAttempt(attempt - 1);
        setProgress(true);
    }

    function stopQuiz() {
        setProgress(false);
    }

    function mulligan() {
        setAttempt(attempt + 1);
    }

    return (
        <div>
            <p>Number of attemps: {attempt}</p>

            <button onClick={startQuiz} disabled={progress || attempt === 0}>
                Start Quiz
            </button>

            <button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </button>

            <button onClick={mulligan} disabled={progress}>
                Mulligan
            </button>
        </div>
    );
}
