import { useState } from "react";

function Counter () {
    const [counter, setCounter] = useState(0);
  
    const clickFunc = (value) => {
      if (value === -1 && counter === 0) {
        return; // Don't decrement if counter is 0
      }
      setCounter(counter + value);
    };
  
  
    const buttonStyle = {
      backgroundColor: 'blue', 
      color: 'white', 
      border: 'none', 
      borderRadius: '0px', 
      padding: '10px 20px', 
      fontSize: '24px', 
      cursor: 'pointer', 
      transition: 'background-color 0.3s ease',
    };
  
    return (
      <div id="counter">
        
            <button
               onClick={() => clickFunc(1)}
               style={buttonStyle}
            >
               +
            </button>

            <h2 style={{ margin: '0 20px', fontSize: '32px' }}>{counter}</h2>
            <button
              onClick={() => clickFunc(-1)}
              style={buttonStyle}
            >
               -
            </button>
        </div>
      
    );
  }

export default Counter;
