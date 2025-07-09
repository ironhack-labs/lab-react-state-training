import { useState } from "react";

function LikeButton() {

    const [counter, setCounter] = useState(0);
    const increaseLike = () => {
        setCounter(counter + 1)
    }


    return (
        <div>
            <p>
                <button onClick={() => increaseLike()}>{counter} Likes</button>
            </p>
        </div>
    )
}

export default LikeButton