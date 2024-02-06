import { useState } from "react";
import "./LikeButton.css"

export default function LikeButton() {
    const [btn1Value, btn1ValueSet] = useState(0);
    const [btn2Value, btn2ValueSet] = useState(0);
    return(
        <div className="LikeButton">
            <p>Iteration 1</p>
            <button onClick={() => btn1ValueSet(btn1Value + 1)}>{btn1Value} Likes</button>
            <button onClick={() => btn2ValueSet(btn2Value + 1)}>{btn2Value} Likes</button>
        </div>
    )
}