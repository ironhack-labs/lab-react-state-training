import { useState } from "react";

function LikeButton() {
const [firstLike, setFirstLike] = useState(0)
const [secondLike, setSecondLike] = useState(0)

const addFirstLike = () => setFirstLike((prevCount) => prevCount + 1)
const addSecondLike = () => setSecondLike((prevCount) => prevCount + 1)

    return(
    <div className="likes-container">
    <button onClick={addFirstLike}>{firstLike} Likes</button>
    <button onClick={addSecondLike}>{secondLike} Likes</button>
    </div>
)}

export default LikeButton;