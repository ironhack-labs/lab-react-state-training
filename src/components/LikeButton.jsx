import { useState } from 'react';


function LikeButton() {
    const [likes, setLikes] = useState(0);
    
    const incrementLikes = () => {
        setLikes(likes + 1);
    };

    const resetLikes = () => {
        setLikes(0);
    }

    return (
        <div>
        <button onClick={incrementLikes}>Like</button>
        <button onClick={resetLikes}>Reset</button>
        <p>{likes}</p>
        </div>
    );
}

export default LikeButton;