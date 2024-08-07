import { useState } from "react";

function Counter () {
    
    const [counter, setCounter] = useState (0);

    const increaseCounter = () => {
        setCounter(counter + 1); 
    }

    const decreaseCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1); 
        }
    }
    
    return (
        <section className="counter">
            <div>
                <button onClick={increaseCounter}> + </button>
            </div>
            <div>
                {counter}
            </div>

            <div>
                <button onClick={decreaseCounter}> - </button>
            </div>
        </section>
    )

}

export default Counter;