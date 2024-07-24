import { useState } from "react"

const LikeBtn = () => {
    const [counter, setCounter] = useState(0)

    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

    const handleCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="LikeBtn">
            <button onClick={handleCounter}>{counter} likes</button>
        </div>
    )
}

export default LikeBtn