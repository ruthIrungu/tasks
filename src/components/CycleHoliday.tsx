import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday = "🎄" | "🌸" | "☀️" | "🍁" | "🎃";
// holidays are yule, ostara, litha, mabon, and samhain

const ALPHAHOLIDAY: Record<Holiday, Holiday> = {
    "🎄": "☀️",
    "☀️": "🍁",
    "🍁": "🌸",
    "🌸": "🎃",
    "🎃": "🎄"
};

const SEQUENHOLIDAY: Record<Holiday, Holiday> = {
    "🎄": "🌸",
    "🌸": "☀️",
    "☀️": "🍁",
    "🍁": "🎃",
    "🎃": "🎄"
};

export function CycleHoliday(): JSX.Element {
    const [currHoliday, setHoliday] = useState<Holiday>("🎄");
    function alphabeticHoliday(): void {
        const newHol = ALPHAHOLIDAY[currHoliday];
        setHoliday(newHol);
    }
    function sequentialHoliday(): void {
        const newHol = SEQUENHOLIDAY[currHoliday];
        setHoliday(newHol);
    }
    return (
        <div>
            <div>
                Current Holiday: <span> {currHoliday}</span>
            </div>
            <div>
                <Button onClick={alphabeticHoliday}>Advance by Alphabet</Button>
                <Button onClick={sequentialHoliday}>Advance by Year</Button>
            </div>
        </div>
    );
}
