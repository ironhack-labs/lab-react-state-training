import { useState } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        className= {styles.btnCounter}
      >
        +
      </button>
      <span>{counter}</span>
      <button
        onClick={() => {
            if(counter > 0)
                setCounter(counter - 1);
        }}
        className= {styles.btnCounter}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
