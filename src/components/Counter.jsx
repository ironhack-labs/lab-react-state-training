import { useState } from "react";

function Counter() {
  const [like, setLike] = useState(0);

  return (
    <>
      <p>You clicked {like} times</p>
      <button onClick={() => setLike(like + 1)}> + </button>
      <button onClick={() => setLike(like === 0 ? 0 : like - 1)}> - </button>
    </>
  );
}

export default Counter;
