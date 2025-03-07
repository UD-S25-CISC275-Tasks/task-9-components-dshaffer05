import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎃");

    function changeYearly(): void {
        if (holiday === "🍀") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🎄");
        } else if (holiday === "🎄") {
            setHoliday("🎉");
        } else if (holiday === "🎉") {
            setHoliday("🍀");
        }
    }

    function changeAlphabetically(): void {
        if (holiday === "🎄") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🎉");
        } else if (holiday === "🎉") {
            setHoliday("🍀");
        } else if (holiday === "🍀") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🎄");
        }
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <div>
                <Button onClick={changeAlphabetically}>
                    Advance Alphabetically
                </Button>
                <Button onClick={changeYearly}>Advance by Year</Button>
            </div>
        </div>
    );
}
