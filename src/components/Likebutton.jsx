import { useState } from 'react';

function LikeButton() {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return <button onClick={increaseCounter}>{counter} Likes</button>;
}

export default LikeButton;
