import React, {useState} from "react";


 function LikeButton(){
    const [count, setCount] = useState(0);
    return(
        <div id="likes">
        <p>{count} Likes</p>
        <button onClick={() => setCount(count + 1)}>Increase counter</button>
        </div>
    )
    
}
export default LikeButton