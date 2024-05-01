import { useState } from "react";
import "./DiscoButton.css"

const colorArray = ["purple", "blue", "green", "yellow", "orange", "red"];

const DiscoButton = () => {
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState(colorArray[0])
    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1);
                setColor(colorArray[(counter + 1) % colorArray.length])
            }
            } className={color}>{counter} Likes</button>
        </>
    )
};

export default DiscoButton;