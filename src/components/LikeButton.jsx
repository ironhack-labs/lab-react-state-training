import { useState } from "react";

function LikeButton(){

    const [state, setState] = useState(0);

    return (
        <>
            <button onClick={() => {
            setState(state + 1);
            }}>{state} Likes</button>
        </>
    )
}

export default LikeButton;