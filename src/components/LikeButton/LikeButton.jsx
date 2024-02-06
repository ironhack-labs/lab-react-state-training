import './LikeButton.css'
import { useState } from 'react'

const LikeButton = () => {

    const [counter, setCounter] = useState(0)

    const handleCounterUp = () => {
        setCounter(counter + 1)
    }

    return (

        <div className="Counter">
            <button onClick={handleCounterUp}> {counter} Likes </button>
        </div>

    )
}

export default LikeButton