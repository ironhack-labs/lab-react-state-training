import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrement = () =>{
    if(count >0){
      setCount(count - 1)
    }
  }

  return( 
  <div className="text-center mt-3">
    <button className="btn btn-primary mx-2" onClick={handleDecrement}>
      -
    </button>
    <span className="mx-3 fs-4">{count}</span>
    <button className="btn btn-primary mx-2" onClick={() => setCount(count + 1)}>
    +
</button>

  </div>
);
}

export default Counter;
