import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <h2>Counter</h2>
      <p>You clicked {count} times</p>
      <button className='btn' onClick={
        () => {
          if(count > 0){
            setCount(count - 1);
          }
          
        }
      }
        > - </button>
      <button className='btn' onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}
export default Counter;