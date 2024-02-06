import { useState } from "react";
function DiscoButton() {

    const colorsArray = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const randomColor = colorsArray[Math.floor(Math.random()* colorsArray.length)];
    const randomColor2 = colorsArray[Math.floor(Math.random()* colorsArray.length)];

    const [backGroundColor, setBackgroundColor] = useState("purple");
    const [backGroundColor2, setBackgroundColor2] = useState("purple");

    const changeColor = () => {setBackgroundColor(randomColor);}
    const changeColor2 = () => {setBackgroundColor2(randomColor2);}

    return (
        <div>
        <button style={{backgroundColor: backGroundColor}} onClick={()=>{setCount(count + 1), changeColor()}}>{count} Likes</button>
        <button style={{backgroundColor: backGroundColor2}} onClick={()=>{setCount2(count2 + 1), changeColor2()}}>{count2} Likes</button>
        </div>
    );

}

export default DiscoButton;