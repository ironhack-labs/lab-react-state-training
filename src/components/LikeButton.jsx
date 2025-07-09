import { useState } from "react"

function LikeButton () {
    let [addingLike, setAddingLikes] = useState(0)

    let increaseCount = () => {
        setAddingLikes(addingLike + 1)
    }

    return (
        <button style={{marginLeft: '650px'}} onClick={increaseCount}> {addingLike} Likes</button>
    )
}

export default LikeButton