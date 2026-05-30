import { useState } from "react";

export const DiscoButton = () => {
    let [counter, setCounter] = useState(0);

    const colorsArr = ["purple", "blue", "green", "yellow", "orange", "red"]
    const indexesArr = Array.from({ length: 2 }, () => Math.floor(Math.random() * colorsArr.length))

    const discoStyle = {
        backgroundColor: colorsArr[indexesArr[0]],
        outline: `1px solid ${colorsArr[indexesArr[1]]}`
    }
    
    return (
        <div>
            <button style={discoStyle} onClick={() => setCounter(counter + 1)}>{counter} Likes</button>
        </div>
    )
}