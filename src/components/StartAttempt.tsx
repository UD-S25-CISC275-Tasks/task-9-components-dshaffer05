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
                {progress && <Button onClick={stop}>Stop Quiz</Button>}
                {!progress && <Button onClick={start}>Start Quiz</Button>}
                {!progress && <Button onClick={mulligan}>Mulligan</Button>}
            </div>
        </div>
    );
}
