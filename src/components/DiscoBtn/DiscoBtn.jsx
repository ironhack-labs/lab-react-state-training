import { useState } from "react"

const DiscoBtn = () => {
    const [counter, setCounter] = useState(0)

    const handleCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="DiscoBtn">
            <button onClick={handleCounter}>{counter} likes</button>
        </div>
    )
}

export default DiscoBtn