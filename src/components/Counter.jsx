import { useState } from "react";


function LikeButton() {
  const [count, setCount] = useState(0);
  
  function plusClick() {
    setCount(count + 1);
  }

  function minusClick() {
    setCount(count - 1);
  }

  return (
    <>
    <button onClick={plusClick}>+</button>
    <p>Counter: {count}</p>
    <button onClick={minusClick}>-</button>
    </>
  )
}

export default LikeButton
