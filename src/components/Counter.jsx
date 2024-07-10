import { useState } from "react";

function Counter() {
  const [newNumber, setNewNumber] = useState(0);
  const handlePlus = () => {
    console.log("mas");
    setNewNumber(newNumber + 1);
  };
  const handleMinus = () => {
    console.log("menos");
    if (newNumber > 0) {
      setNewNumber(newNumber - 1);
    }
  };
  return (
    <div id="buttons">
      <button className="button" onClick={handleMinus}>
        -
      </button>
      {newNumber}
      <button className="button" onClick={handlePlus}>
        +
      </button>
    </div>
  );
}

export default Counter;
