import React, { useState } from "react";

export default function LikeButton() {

    const [count, setCount] = useState(0);
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
    const [showColor, setShowColor] = useState(0);

    const [count2, setCount2] = useState(0);
    const colors2 = ["purple", "blue", "green", "yellow", "orange", "red"]
    const [showColor2, setShowColor2] = useState(0);
    
    const toggleColor = () => {

        if (showColor > 4) {
            let showColor = 0
            setShowColor(showColor)
            setCount(count + 1)

        } else {
            setCount(count + 1)
            setShowColor(showColor + 1)
        }
    };

    const toggleColor2 = () => {

        if (showColor2 > 4) {
            let showColor2 = 0
            setShowColor2(showColor2)
            setCount2(count2 + 1)

        } else {
            setCount2(count2 + 1)
            setShowColor2(showColor2 + 1)
        }
    };

    return (
        <div className="LikeButton">
            <button onClick={toggleColor} style={{ backgroundColor: colors[showColor] }} > {count} Likes </button>
            <button onClick={toggleColor2} style={{ backgroundColor: colors2[showColor2] }} > {count2} Likes </button>
        </div>
    );
}