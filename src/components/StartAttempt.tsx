import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function start(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }

    function stop(): void {
        setProgress(false);
    }

    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>Current Attempts: {attempts}</div>
            <div>
                <Button onClick={stop} disabled={!progress}>
                    Stop Quiz
                </Button>
                <Button onClick={start} disabled={progress || attempts <= 0}>
                    Start Quiz
                </Button>
                <Button onClick={mulligan} disabled={progress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
