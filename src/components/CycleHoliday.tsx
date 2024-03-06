import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday = "Yule" | "Ostara" | "Litha" | "Mabon" | "Samhain";

const ALPHAHOLIDAY: Record<Holiday, Holiday> = {
    Yule: "Litha",
    Litha: "Mabon",
    Mabon: "Ostara",
    Ostara: "Samhain",
    Samhain: "Yule"
};

const SEQUENHOLIDAY: Record<Holiday, Holiday> = {
    Yule: "Ostara",
    Ostara: "Litha",
    Litha: "Mabon",
    Mabon: "Samhain",
    Samhain: "Yule"
};

export function CycleHoliday(): JSX.Element {
    const [currHoliday, setHoliday] = useState<Holiday>("Yule");
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
                <Button onClick={alphabeticHoliday}>
                    New Holiday Alphabetically{" "}
                </Button>
                <Button onClick={sequentialHoliday}>
                    New Holiday Sequentially
                </Button>
            </div>
        </div>
    );
}
