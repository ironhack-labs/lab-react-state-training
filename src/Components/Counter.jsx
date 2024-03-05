import React, { useState } from "react";

// Define a functional component named Counter
const Counter = () => {
  // State to track the count, initialized to 0
  const [count, setCount] = useState(0);

  // Event handler for the + button click
  const handleIncrement = () => {
    // Update the state to increase the count by 1
    setCount(count + 1);
  };

  // Event handler for the - button click
  const handleDecrement = () => {
    // Check to ensure the count doesn't go below 0
    if (count > 0) {
      // Update the state to decrease the count by 1
      setCount(count - 1);
    }
  };

  // Render JSX with buttons and the current count
  return (
    <div>
      {/* Button with an onClick event that triggers the handleDecrement function */}
      <button onClick={handleDecrement}>-</button>

      {/* Button with an onClick event that triggers the handleIncrement function */}
      <button onClick={handleIncrement}>+</button>

      {/* Paragraph element displaying the current count */}
      <p>{`${count}`}</p>
    </div>
  );
};

// Export the Counter component as the default export
export default Counter;
