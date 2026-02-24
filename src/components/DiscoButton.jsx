import { useState } from 'react';
import LikeButton from './LikeButton';

function DiscoButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };
  const currentColor = colors[likes % colors.length];

  return (
    <>
      <LikeButton count={likes} color={currentColor} onClick={handleClick} />
    </>
  );
}
export default DiscoButton;
