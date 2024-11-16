import { useState } from "react";
import "./Counter.css"

function Counter(){
    const [counter, setCounter] = useState(0);
    return (
      <div className="counter">
        <button
          className="counter-btn"
          onClick={() => {
            setCounter(counter >= 1 ? counter - 1 : counter);
          }}
        >
          -
        </button>
        <span>{counter}</span>
        <button
          className="counter-btn"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
    );
}

export default Counter;