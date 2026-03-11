import { useState } from 'react';


function LikeButton() {
    const [likes, setLikes] = useState(0);
    const increaseLikes = () => {
        setLikes(likes + 1);
    };
    return (
        <div id="like-content">
            <section>
                <button onClick={increaseLikes}>{likes} likes</button>
            </section>
        </div>
    );


}

export default LikeButton