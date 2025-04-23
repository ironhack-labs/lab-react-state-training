import React, {useState} from 'react';
import './LikeButton.css';

function LikeButton () {
    const [counter , setCounter] = useState(0);

 

  const increaseCounter =  () => {
    setCounter(counter +1);
  };

  return ( 
  <div>
        <section>
          
          <button className="like-button" onClick={increaseCounter}> {counter} likes  </button>
        </section>
      </div>
  )
}

export {LikeButton};