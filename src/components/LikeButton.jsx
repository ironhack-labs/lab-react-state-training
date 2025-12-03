

import { useState } from 'react';

function LikeButton() {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    };

    const decreaseCounter = () => {
        if (counter > 0) setCounter(counter - 1);
    };

    return (
        <div className="likeButton"> 
            <section>
                <button onClick={increaseCounter}>+</button>
                <button onClick={decreaseCounter}>-</button>
                <p>{counter}</p>
            </section>
        </div>
    );
}

export default LikeButton;

