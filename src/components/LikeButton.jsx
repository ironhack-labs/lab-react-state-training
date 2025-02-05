

import { useState } from "react";

function LikeButton () {
    const [counter, setCounter] = useState(0);
  
    const clickFunc = (value) => {
      if (value === -1 && counter === 0) {
        return; // Don't decrement if counter is 0
      }
      setCounter(counter + value);
    };
  
    const divStyle = {
      backgroundColor: counter > 10 ? 'lightgreen' : 'white',
      padding: '20px',
      borderRadius: '10px',
      transition: 'background-color 0.1s ease', 
    };

    return (
      <div id="main-content" style={divStyle}>
          <section>
            
            <button onClick={() => clickFunc(1)}>{counter} like</button>
            </section>
            
           
        </div>
      
    );
  }

export default LikeButton;
