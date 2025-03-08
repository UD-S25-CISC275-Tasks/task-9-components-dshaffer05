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

export function TwoDice(): React.JSX.Element {
    const [die1, setDie1] = useState<number>(1);
    const [die2, setDie2] = useState<number>(2);
    const [win, setWin] = useState<string>("");

    function checkWin(): void {
        if (die1 === die2 && die1 === 1) {
            setWin("Lose");
        } else if (die1 === die2 && die1 !== 1) {
            setWin("Win");
        }
    }

    function roll1(): void {
        let value = d6();
        setDie1(value);
        checkWin();
    }
    function roll2(): void {
        let value = d6();
        setDie2(value);
        checkWin();
    }

    return (
        <div>
            <span data-testid="left-die">Die 1: {die1}</span>
            <span data-testid="right-die"> Die 2: {die2}</span>
            <div>
                <Button
                    onClick={() => {
                        roll1();
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        roll2();
                    }}
                >
                    Roll Right
                </Button>
            </div>
            <div>{win}</div>
        </div>
    );
}
