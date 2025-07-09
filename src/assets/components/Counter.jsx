import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const counterFoo = (value) => {
    let newValue;
    switch (value) {
      case -1:
        newValue = counter - 1;
        if (newValue < 0) {
          newValue = 0;
        }
        break;
      case +1:
        newValue = counter + 1;
        break;
    }
    setCounter(newValue);
  };

  return (
    <div className="container">
      <button
        onClick={() => {
          counterFoo(-1);
        }}
      >
        -
      </button>
      <p>{counter}</p>
      <button
        onClick={() => {
          counterFoo(+1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
