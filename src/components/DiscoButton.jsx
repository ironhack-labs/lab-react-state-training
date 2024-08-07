import { useState } from "react";

export function DiscoButton () {

    const colorArr = ["purple", "blue", "green", "yellow", "orange", "red"];

    const [count, setCount] = useState(0);
    const [currColor, setCurrColor] = useState(colorArr[0])
    
    const changeButton  = () => {
        setCount(count+1);
        setCurrColor(colorArr[Math.floor(Math.random() * 6)]);
    }
    return (
        <div className = "disco-button">
            <button 
            style={{backgroundColor: currColor}} 
            onClick={changeButton}
            >
                {count} Likes
            </button>
        </div>
    )
}