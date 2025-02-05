import { useState } from "react"

function LikeButton(){

const [like, setLike] = useState(0)

const newLike = () => {
    setLike(like + 1)
}
    return <button onClick={newLike}>{like} Likes</button>
}

export default LikeButton