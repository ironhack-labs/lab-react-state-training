import { useState } from "react";

const DiscoButton = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("white")
    const textColors = ["purple", "blue", "green", "yellow", "orange", "red"];

    const changeColor = () => {
        const randomColor = Math.floor(Math.random() * textColors.length);
        setColor(textColors[randomColor]);
    }
    
        return (
            <button onClick={() =>{ setCount(count + 1); changeColor(); }} style={{backgroundColor: color}}> {count} likes </button>
            )
    
}

export default DiscoButton;