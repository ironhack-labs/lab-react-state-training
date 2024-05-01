import { useState } from "react";
function LikeButton () {
    const [counter, setCounter] = useState(0);
    const addLike = () => {
        setCounter(counter + 1)
    }

    

    return (
        <>
        <div>
        <button onClick={addLike}>{counter} Likes</button>
        </div>
        </>
    )
    }

    export default LikeButton;