import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);

  let increaseButton = () => {
    setCounter(counter + 1)
  };

  let decreaseButton = () => {
    if(counter>0){
       setCounter(counter - 1) 
    }
    
  }

  return (
    <div style={{marginLeft: '625px', marginTop:'20px'}}>
      <button onClick={increaseButton} style={{ border: '1px solid black', backgroundColor: 'blue', margin: '10px', color: 'white' }}>+</button>
      <span>{counter}</span>
      <button onClick={decreaseButton} style={{ border: '1px solid black', backgroundColor: 'blue', margin: '10px', color: 'white'}}>-</button>
    </div>
  );
}

export default Counter;
