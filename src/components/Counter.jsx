import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const likeIncrease = () => {
    setCount(prev => prev + 1);
  };

  const likeDecrease = () => {

    setCount(prev => prev > 0 ? prev - 1 : 0);
  };

  return (
    <div>
      <p>Likes: {count}</p>
      <button onClick={likeIncrease}>+</button>
      <button onClick={likeDecrease}>-</button>
    </div>
  );
}

export default Counter;
