import { useState } from "react"

function LikeButton () {

    const [likes, setLikes] = useState(0)

    const updateLikes = () => {
        setLikes(likes + 1)
    }

    return (
        <button onClick={updateLikes}>{likes} Like</button>
    )
}

export default LikeButton