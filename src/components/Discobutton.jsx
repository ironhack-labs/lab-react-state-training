import { useState } from "react";

function DiscoButton(){
    let colors=["purple", "blue", "green", "yellow", "orange", "red"]
    let randomColor = colors[Math.floor(Math.random() * Math.floor(colors.length))]  
    const [color, setColor] = useState(randomColor)
    const [count, setCount] = useState(0)
    function handleClick(){
            setCount(count+1)
            setColor(randomColor)
    }
    return(
        <div>
            <button onClick={handleClick} style={{background: `${color}`}}>{count} Likes</button>
        </div>
    )
}
export default DiscoButton