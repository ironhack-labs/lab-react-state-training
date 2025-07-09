import { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    };

    const decreaseCounter = () => {
        if (counter > 0)
            setCounter(counter - 1);
    };
    return (
        <div id="main-content">
            <section className="counter-content">
                <button className="counter-btn" onClick={decreaseCounter}>-</button>
                <p>{counter}</p>
                <button className="counter-btn" onClick={increaseCounter}>+</button>


            </section>
        </div>
    )
}


export default Counter