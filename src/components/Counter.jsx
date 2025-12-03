import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);



    const increaseCounter = () => {
        setCounter(counter + 1);
    };

    const DecreaseCounter = () => {

        if (counter > 0) {

            setCounter(counter - 1);
        }
        ;
    }

    return (
        <div className="Box">
            <section>
                <h2>Iteración 2 |Counter</h2>
                <button className="btn" onClick={DecreaseCounter}>-</button>
                <span className="value">{counter}</span>
                <button className="btn" onClick={increaseCounter}>+</button>
            </section>

        </div>
    );
}

export default Counter;