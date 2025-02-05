import { useState } from "react";

export default function LikeButton () {
    
    const [button, setButton] = useState(0)
    const sumButton = () => {
        setButton(prevButton => prevButton + 1)
    }

    return (
        <>
        <button id="button" onClick={sumButton}>{button} Likes</button>
        </>
    )
}