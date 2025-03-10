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
    const [leftDie, setleftDie] = useState<number>(3);
    const [rightDie, setrightDie] = useState<number>(4);

    /*function roll1(): void {
        let value = d6();
        setleftDie(value);
    }
    function roll2(): void {
        let value2 = d6();
        setrightDie(value2);
    }*/

    return (
        <div>
            Die 1: <span data-testid="left-die">{leftDie}</span>
            Die 2: <span data-testid="right-die">{rightDie}</span>
            <div>
                <Button
                    onClick={() => {
                        setleftDie(d6);
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        setrightDie(d6);
                    }}
                >
                    Roll Right
                </Button>
            </div>
            <div>
                <div>
                    {leftDie === rightDie && leftDie !== 1 && <div>Win</div>}
                    {leftDie === rightDie && leftDie === 1 && <div>Lose</div>}
                </div>
            </div>
        </div>
    );
}
