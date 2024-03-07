import React, { useState } from "react";
import { Button } from "react-bootstrap";

// type Colors = ["red", "blue", "green"];

export function ColoredBox(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    function ChangeColor(): void {
        // const colorIndex = 0;
        // const changedIndex = (colorIndex + 1) % COLORS.length;
        // setColor(COLORS[changedIndex]);
        setColor(color === "red" ? "blue" : color === "blue" ? "green" : "red");
    }

    function ColorPreview(): JSX.Element {
        return (
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        );
    }
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {color}</span>
            <div>
                <Button onClick={ChangeColor}>Next Color</Button>
                <ColorPreview></ColorPreview>
            </div>
        </div>
    );
}
