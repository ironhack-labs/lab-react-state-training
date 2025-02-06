import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const suma = () => {
	setCount(count + 1);
  };
  const resta = () => {
	if(count>0) setCount( count - 1);
  };

  return (
	<>
	  <button onClick={resta}>-</button>
	  <label htmlFor="">{count}</label>
	  <button onClick={suma}>+</button>
	</>
  );
}
