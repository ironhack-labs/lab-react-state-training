import { useState } from "react"

const LikeButton = () => {
    const [counterLikes1, setCounterLikes1] = useState(0)
    const [counterLikes2, setCounterLikes2] = useState(0)

    const incrementCounter1 = () => {
        setCounterLikes1(counterLikes1 + 1)
    }
    const incrementCounter2 = () => {
        setCounterLikes2(counterLikes2 + 1)
    }

    return (
        <div className="counterLikes1">
            <h3>Execise 1</h3>
            <hr />
            <button onClick={incrementCounter1}>{counterLikes1} Likes</button>
            <button onClick={incrementCounter2}>{counterLikes2} Likes</button>
        </div>
    )
}
export default LikeButton