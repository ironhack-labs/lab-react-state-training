import { useState } from "react"

export default function LikeButton() {
    const [counter, setCounter] = useState(0);

    const liked = () => {
        setCounter(counter + 1);
    }
    return (
        <>
            <button onClick={liked}>{counter} Likes</button>
        </>
    );

}