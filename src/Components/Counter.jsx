import React, { useState } from 'react';
import './Counter.css'; 

function Counter() {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    };

    const decreaseCounter = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            <section>
                <p>
                <button className="counter-button" onClick={decreaseCounter}>-</button>  
             
              
                     <span>  {counter}  </span>      
               
                <button className="counter-button" onClick={increaseCounter}>+</button>   
                </p>
            </section>
        </div>
    );
}

export { Counter };