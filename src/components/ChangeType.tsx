import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [currType, setType] = useState<QuestionType>("short_answer_question");

    function flipType(): void {
        if (currType === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            {currType === "multiple_choice_question" ? (
                <span>Multi Choice Question </span>
            ) : (
                <span>Short Answer Question</span>
            )}
        </div>
    );
}
