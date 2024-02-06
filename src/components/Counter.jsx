import React, { useState } from 'react';

function Counter() {
 
  const [counter, setCounter] = useState(0);

  
  const handleIncrement = () => {
    
    setCounter(counter + 1);
  };

  
  const handleDecrement = () => {
    
    setCounter(counter > 0 ? counter - 1 : 0);
  };

  return (
    <div>
      
      <p>Counter Value: {counter}</p>

   
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
