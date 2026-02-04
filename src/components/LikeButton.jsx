import React, { useState } from 'react'

function LikeButton() {

    const [counter, setCounter] = useState(0)
    return (
        <div>
            <p style={{padding: "10px", width: "100px"}} onClick={() => setCounter(counter + 1)}>{counter} Likes</p>
        </div>
    )
}

export default LikeButton