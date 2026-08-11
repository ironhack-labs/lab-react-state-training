import { useState } from 'react';

function Counter (){
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
  };
  const decrement = () => {
        setCounter(counter - 1);
  };
  return (
    <div style={{display: "flex", flexDirection : "row", alignItems :"center", gap:"10P" }}>
        <button onClick={increment} style={{backgroundColor : "blue", border : "2px solid black", width : 20 , height : 20}}>+</button>
        <p>{counter}</p>
        <button onClick={decrement} style={{backgroundColor : "blue", border : "2px solid black", width : 20 , height : 20}}>-</button>
    </div>
    
  )
}
export default Counter;