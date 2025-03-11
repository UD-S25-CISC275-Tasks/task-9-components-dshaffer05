import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ColorPreviewProps {
    changeColor: () => void;
}

function ChangeColor({ changeColor }: ColorPreviewProps): React.JSX.Element {
    return <Button onClick={changeColor}>Next Color</Button>;
}

function ColorPreview({
    colorIndex,
}: {
    colorIndex: number;
}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    // State for the current color index
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    // Function to change the color
    const nextColor = () => {
        setColorIndex((1 + colorIndex) % COLORS.length);
    };

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor changeColor={nextColor}></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
