import {useState} from "react";

function LikeButton() {
    const [likes, settLikes] = useState(0);
  
    const handleClick = () => {
      settLikes(prevLikes => prevLikes + 1);
    };

    return (
      <button onClick={handleClick}>
      {likes} {likes === 1 ? 'Like' : 'Likes'}
      </button>
    );
  }
  
  export default LikeButton;