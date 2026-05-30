import { useState } from "react"

export const LikeButton = () => {
    let [counter, setCounter] = useState(0);

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>{counter} Likes</button>
        </div>
    )
}