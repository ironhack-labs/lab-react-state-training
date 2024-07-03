import { useState } from "react";

const LikeButton = () => {

    const [num, setNum] = useState(0)
    return (  
        <button className="likeBtn" onClick={() => setNum(num + 1)}> {num} likes</button>
    );
}
 
export default LikeButton;