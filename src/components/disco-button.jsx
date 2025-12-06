import { useState } from "react";

function DiscoButton () {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    
    const [count, setCount] = useState(0);

    const [color, setColor] = useState(0);

    const colorsRandom = () => {
        const colorRand = Math.floor(Math.random() * colors.length);
        setCount(count + 1);
        setColor(colorRand);
    }

    return (
        <button onClick={colorsRandom} 
            style={{ backgroundColor: colors[color], color: 'white' }}>
            {count} Likes</button>
    );
}

export default DiscoButton;