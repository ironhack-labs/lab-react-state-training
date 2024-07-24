import { useState } from "react"
const LikeButton = () => {

    const [doesLike, setDoesLike] = useState(false)

    const handleLike = () => {
        setDoesLike(!doesLike)
    }

    return (
        <div className="LikeButton">
            <button onClick={handleLike}>Likes</button>
        </div>

    )
}

export default LikeButton