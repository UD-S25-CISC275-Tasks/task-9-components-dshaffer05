import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [reveal, revealAnswer] = useState<boolean>(false);

    function revealIt(): void {
        revealAnswer(!reveal);
    }

    return (
        <div>
            <Button onClick={revealIt}>Reveal Answer</Button>
            {reveal && <div>The answer is 42.</div>}
        </div>
    );
}
