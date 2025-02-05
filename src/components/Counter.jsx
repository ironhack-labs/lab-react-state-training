import { useState } from "react";
import LikeButton from "./LikeButton";

export default function Counter({button}) {

    const [numbers, setNumbers] = useState(0)
    const changeNumbers = (value) => {
        setNumbers((prev) => prev + value)
    }

    return (
        <div id="container">
        <button id="buttonCount" onClick={() => changeNumbers(-1)}>-</button>
        <p>{numbers}</p>
        <button id="buttonCount" onClick={() => changeNumbers(+1)}>+</button>
        
        </div>
    )
}