import { useState, useEffect } from "react";
import "./DiscoButton.css"

export default function DiscoButton() {
    let colors = ["purple", "blue", "green", "yellow", "orange", "red"];

    const [value, setValue] = useState(0);
    const [bgColor, setBGColor] = useState(colors[0]);
    const [colorIndex, setColorIndex] = useState(0);

    function changeBGColor() {
        if (colorIndex +1 > 5) {
            setColorIndex(0)
        } else {
            setColorIndex(colorIndex + 1)
        }
        setBGColorFn()
    }

    const setBGColorFn = useEffect(() => {
        setBGColor(colors[colorIndex]);
     }, [colorIndex])

    return(
        <div className="DiscoButton">
            <p>Iteration 5</p>
            <button style={{backgroundColor: bgColor}} onClick={() => {
                setValue(value + 1);
                changeBGColor();
            }}>{value} Likes</button>
        </div>
    )
}