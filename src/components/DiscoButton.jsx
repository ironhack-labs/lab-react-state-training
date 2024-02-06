import { useState } from "react";

function DiscoButton (props) {

    const bgColors = ["purple", "blue", "green", "yellow", "orange", "red"];

    const [count, setCount] = useState(0);

    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];

    const [backColor,setbackColor] = useState("white");

    const changeColor = ()=> {setbackColor(randomColor)}

    return (
        <div>
            <h1>DiscoButton</h1>
            <button onClick={()=>{setCount(count +1); changeColor()}} style={{backgroundColor: backColor}}>{count}Likes</button>
        </div>
    )
}

export default DiscoButton