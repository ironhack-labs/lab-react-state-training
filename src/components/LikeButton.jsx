import {useState} from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    const likesUp = () => {
        setLikes(likes => likes + 1);
    }

    return (
      <>
        <button onClick={likesUp}>{likes} Likes</button>
      </>
    );
}
