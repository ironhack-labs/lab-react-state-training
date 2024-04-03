import { useState } from "react";

const Counter = () => {
    const [likes, setLikes] = useState(0);
    return ( 
        <>
        <button className="like-button" onClick={() =>  likes > 0 && setLikes(likes - 1)}>-</button>
        <span>{likes}</span>
        <button className="like-button" onClick={() => setLikes(likes + 1)}>+</button>
        </>

     );
}
 
export default Counter;