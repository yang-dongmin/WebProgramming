import React, { useState, useEffect } from "react";
function MouseTracker() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("click", updatePosition);
        return () => {
            window.removeEventListener("click", updatePosition);
        };
    }, []);
    return (
        <div>
            <h1>마우스 위치</h1>
            <p>X: {position.x}, Y: {position.y}</p>
        </div>
    );
}
export default MouseTracker;