import React, { useState } from "react";

function Counter () {
  const [count, setCount] = useState(0);

  function increment (){
    setCount(count + 1);
  }

    function decrement  () {
       
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
   
      <button onClick={increment}>+</button>  {count}
      <button onClick={decrement} disabled={count === 0}>-</button>
    </div>
  );
}

export default Counter;
