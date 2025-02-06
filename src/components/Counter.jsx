import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const counterUp = () => {
        setCounter((counter) => counter + 1)
    };

    const counterDown = () => {
       if (counter <= 0) return counter == 0;
       setCounter((counter) => counter - 1);
    };

    return (
      <div>
        <div>
        <button onClick={counterDown}>-</button>
        {counter} {/* {counter <= 0 ? (counter === 0) : counter} */}
        <button onClick={counterUp}>+</button>
        </div>
      </div>
    );
}