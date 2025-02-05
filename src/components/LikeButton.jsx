import { useState } from "react";

function LikeButton() {
const [counter, setCounter] = useState(0);
const updateCounter = () => {setCounter(counter+1);
}

return (
    <button onClick={updateCounter}>{counter} likes</button>
)
}

export default LikeButton;