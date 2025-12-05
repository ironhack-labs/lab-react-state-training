
import { useState } from 'react';

function DiscoButton() {
    function Restart() {
        return color === (colors.length - 1) ? setColor(0) : setColor((color) => color + 1);
    }
    
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

    const [count, setCount] = useState(0);
    const [color, setColor] = useState(0);

    return (
        <button
            style={{ backgroundColor: colors[color] }}
            onClick={() => {
                Restart();
                setCount((count) => count + 1);
            }}
        >
            {count} Likes
        </button>
    );
}

export default DiscoButton;