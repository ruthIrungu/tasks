import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dice1, setDiceOne] = useState<number>(1);
    const [dice2, setDiceTwo] = useState<number>(5);

    function rollLeftDie(): void {
        setDiceOne(d6());
    }
    function rollRightDie(): void {
        setDiceTwo(d6());
    }

    function winOrLose(): boolean {
        let result = false;
        if (dice1 === 1 && dice2 === 1) {
            result = false;
        } else if (dice1 === dice2) {
            result = true;
        } else if (dice1 !== dice2) {
            result = false;
        }
        return result;
    }

    return (
        <div>
            <div>
                Left Die: <span>{dice1}</span>
                Right Die: <span>{dice2} </span>
            </div>
            <div>
                <Button onClick={rollLeftDie}>Roll Left</Button>
                <Button onClick={rollRightDie}>Roll Right</Button>
            </div>
            <div>
                {winOrLose() ? <span>You win!</span> : <span>You lose.</span>}
                <span></span>
            </div>
        </div>
    );
}
