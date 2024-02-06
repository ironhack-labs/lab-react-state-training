import { useState } from 'react';

function LikeButton (props) {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div>
        <button onClick={() => setCount(count + 1)}>Likes {count}</button>
        <button onClick={() => setCount2(count2 + 1)}>Likes {count2}</button>
        </div>
    )
}

export default LikeButton;