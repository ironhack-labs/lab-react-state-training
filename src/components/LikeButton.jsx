import {useState} from 'react';

function LikeButton({initialCount = 0, style, onClick}) {
  const [likesCount, setCount] = useState(initialCount);
  const userClicks = () => {
    setCount(likesCount + 1);
    if (onClick) onClick();
  };
  return (
    <button className="like-btn" style={style} onClick={userClicks}>
      {likesCount} Likes
    </button>
  );
}
export default LikeButton;
