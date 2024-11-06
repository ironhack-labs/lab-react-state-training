import { useState } from "react"

function LikeButton() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count+1)
    }

    return (
        <div>
            <button onClick={increment}> {count} Likes</button>

        </div>
    )
}

export default LikeButton