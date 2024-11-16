import { useState } from "react";

function LikeButton() {
    const [count, setCount] = useState(0);
    const handleCounter = () => setCount(count + 1);
    
    return (
        <div>
           <button className={`btn btn-light btn-outline-secondary border-2 text-black`} onClick={handleCounter}> {count} Likes</button> 
        </div>
    );
}


export default LikeButton;