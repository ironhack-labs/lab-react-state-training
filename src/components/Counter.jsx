import {useState} from 'react';
 


export default function Counter(){

const [number, setNumber] = useState(0)

function incrementCounter(){
  setNumber(number + 1)
}

function decrementCounter(){
  if( number > 0)setNumber(number - 1)
}

return ( 
  <>
<div className="counter">
  <button id="increment" onClick={decrementCounter}></button>
   <span id="counter">{number}</span>
  <button id="decrement" onClick={incrementCounter}></button>
</div>

</>)

} 