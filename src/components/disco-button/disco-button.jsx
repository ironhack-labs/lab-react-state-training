import { useState } from "react";

 
 function DiscoButton () {
    const [count, setCount] = useState(0);

    const bgColours = ["purple", "blue", "green", "yellow", "orange", "red"];

    const [bgColor, setBgColor] = useState(bgColours[0]);

    const handleClick = () => {
        setCount(count +1);

        const currentIndex = bgColours.indexOf(bgColor);
        setBgColor(bgColours[currentIndex +1])
    }

    return (
    <div>
        <button className={`btn btn-sm border btn-light`} onClick={handleClick} style={{ backgroundColor: bgColor, color: "white" }}>
            {count} Likes
        </button>
    </div>
    )
 }

 export default DiscoButton;
