import React, {useState } from "react";

function LikeButton(){
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return(
        <button onClick={handleClick}>{count} Likes</button> 
    )
}
export default LikeButton;
