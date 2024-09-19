import { useState } from "react";
import LikeButton from "./LikeButton";

function DiscoButton(){

    const [color, setColor] = useState("transparent");

    const handleColor = () => {
        console.log("Cambia!");
        const colorsArr = ["purple", "blue", "green", "yellow", "orange", "red"];

        let randomColor = Math.floor(Math.random()*colorsArr.length-1);
        
        let newColor =colorsArr[randomColor];
        console.log(newColor);
        setColor(newColor);

    };

    return(
        <LikeButton onClick={handleColor} color={color} />
    );
}

export default DiscoButton;