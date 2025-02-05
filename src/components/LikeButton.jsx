
import './LikeButton.css';
import { useState } from 'react';

function LikeButton() {

    const [count, setCount] = useState(0);

    return (
        <div className="like-button">
            <button onClick={() => setCount(count + 1)}> {count} Likes</button>
        </div>
    );
}

export default LikeButton;