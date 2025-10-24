import React, { useState } from 'react';

function MouseTracker({ render }) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = (event) => {
        setX(event.clientX);
        setY(event.clientY);
    };

    return (
        <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
            {render({ mouseX: x, mouseY: y })}
        </div>
    );
}


function RenderProp() {
    return (
        <div>
            <h1>Mouse Position Tracker</h1>
            <MouseTracker
                render={({ mouseX, mouseY }) => (
                    <p>
                        Current mouse position: ({mouseX}, {mouseY})
                    </p>
                )}
            />

            <MouseTracker
                render={({ mouseX, mouseY }) => (
                    <div>
                        The X coordinate is: {mouseX} <br />
                        The Y coordinate is: {mouseY}
                    </div>
                )}
            />
        </div>
    );
}

export default RenderProp;