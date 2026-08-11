import { useState } from "react";

function LikeButton() {

    const [counterValue, setCounterValue] = useState(0);

    return(
        <button onClick={() => setCounterValue(counterValue + 1)}>{counterValue} Likes</button>
    )
}



export default LikeButton;