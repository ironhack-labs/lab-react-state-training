import { useState } from "react";

function Counter() {
  // Step 1: Create a state variable to store the counter value
  const [count, setCount] = useState(0);

  // Step 2: Define functions to handle the increment and decrement
  const increment = () => {
    setCount(count + 1); // Increment the counter
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1); // Decrement the counter only if it's greater than 0
    }
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* Step 3: Render the buttons */}
      <button onClick={increment}style={{
          backgroundColor: "red",
          cursor: "pointer",
          border: "none",
          borderRadius: "12px",
          padding: "15px 30px",
          fontSize: "18px",
          color: "white",
          fontWeight: "bold",
          transition: "background-color 0.5s ease, transform 0.2s",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          outline: "none",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}> +</button>
      <button onClick={decrement} style={{
          backgroundColor: "blue",
          cursor: "pointer",
          border: "none",
          borderRadius: "12px",
          padding: "15px 30px",
          fontSize: "18px",
          margin: "40px",
          
          color: "white",
          fontWeight: "bold",
          transition: "background-color 0.5s ease, transform 0.2s",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          outline: "none",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}>-</button>
    </div>
  );
}

export default Counter;
