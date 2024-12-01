import {useState} from 'react';

function LikeButton () {
    const [likes, setLikes] = useState (0);

    const handleClick = () => {
        setLikes ((prevLikes) => prevLikes + 1); 
    }
    return (
        <button type="button" onClick={handleClick} className="btn btn-light btn-outline-dark">{likes} Likes</button>
    );
}

export default LikeButton; 