import { useState } from "react"

const LikeButton = () => {

    const [hitLike, setHitlike] = useState(0)

    const incrementLikes = () => {
        setHitlike(hitLike + 1)
    }

    return (
        <div className="LikeButton">

            <h2>My Likes</h2>
            <button onClick={incrementLikes}> {hitLike} Likes </button>

        </div>


    )
}

export default LikeButton