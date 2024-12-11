import { useState } from "react";

const Counter = ({ initialCount = 0 }) => {
    const [count, setCount] = useState(initialCount);
    const handleClick = () => {
      setCount(count + 1);
    };
    const handleClickMin = () => {
        setCount(count - 1);
    };
    return (
        <div>
        <button
          type="button"
          onClick={handleClick}
          style={{
            padding: "5px 10px",
            fontSize: "16px",
            border: "2px solid black",
            borderRadius: "5px",
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
            display: "inline-block",
          }}
        >+
        </button>
        <p>{count}</p>
        <button
          type="button"
          onClick={handleClickMin}
          style={{
            padding: "5px 10px",
            fontSize: "16px",
            border: "2px solid black",
            borderRadius: "5px",
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
            display: "inline-block",
          }}
        > -
        </button>
        </div>
      );
}
    export default Counter;