import { useState } from "react";

function LikeButton(){
    const [count, setCount] = useState(0);
const clickHandler = () => {
    setCount(count+1);
}
    return <>
<button type="button" onClick={clickHandler}>{count} Likes</button>
    </>
}

export default LikeButton;