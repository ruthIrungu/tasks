import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);

    function ShoveBoxButton() {
        setPosition(4 + position);
    }

    function MoveableBox(): JSX.Element {
        return (
            <div
                data-testid="moveable-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "lightblue",
                    border: "1px solid blue",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: position + "px"
                }}
            ></div>
        );
    }

    return (
        <div>
            <h3>Shove Box</h3>
            {/* <span>The box is at: {box.position}</span>
            <div>
                <ShoveBoxButton
                    position={box.position}
                    setPosition={box.setPosition}
                ></ShoveBoxButton>
                {box}
            </div> */}
            <Button onClick={ShoveBoxButton}>Shove</Button>
            <MoveableBox></MoveableBox>
        </div>
    );
}
