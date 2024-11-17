import { useState } from "react";

import LikeButton from "../like-button/likeButton";

function DiscoButton () {
    const [color, setColor] = useState("purple") ;

    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
    const handleClickUp = () => {
        setColor("purple");

        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
    }
    return (
        <>
       <LikeButton  onClick={handleClickUp} style={{backgroundColor:color }}/>
       <LikeButton onClick={handleClickUp} style={{backgroundColor:color }}/>
        </>
 
    )
}
export default DiscoButton;

