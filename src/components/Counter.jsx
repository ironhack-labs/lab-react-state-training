import React, { useState } from "react";

function Counter ( ) {
    const [counter, setCounter] = useState(0);

    const increseCounter = () => {
        setCounter(counter + 1);
      };
    
      const decreaseCounter = () => {
        if (counter === 0) {
          setCounter(counter - 1);
        }
        
      };


    
    return (
        < >
        <section className="counter">
          <button className="counterButton" onClick={increseCounter}> + </button>
          <p>{counter} </p>
          <button className="counterButton"onClick={decreaseCounter}> - </button>
        </section>
        </>
    )
}



export default Counter;