import "./Counter.css"
import { useState } from "react";


function Counter (){
    const[count,setcount]=useState(0);
    const handleCOunter = (increase) => () => {increase ? setcount(count+1) : count <=0 ? 0 : setcount(count-1)};
   
    return (
        <div className="counter-container">
        <button type="button"  className="button-counter" onClick={handleCOunter(false)}>-</button>
        {count}
        <button type="button" className="button-counter" onClick={handleCOunter(true)}>+</button>
      </div>
    )
}

export default Counter;