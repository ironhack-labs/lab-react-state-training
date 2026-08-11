import React from "react";
import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function handleIn() {
    setCount(count + 1);
  }
  function handleDe() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return <div id="btn">
    <button onClick={(handleDe)}>-</button> <span>{count}</span> <button onClick = {(handleIn)}>+</button>
  </div>;
}

export default Counter;
