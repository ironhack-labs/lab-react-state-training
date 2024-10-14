import React, { useState } from 'react';

function LikeButton() {
const [count, setCount] = useState(0);
    return(
    <div className="LikeCount">
    <button onClick={() => setCount(count + 1)}> {count} Likes</button>
    </div>)
}

export default LikeButton;