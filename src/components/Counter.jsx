function Counter() {
    let count = 0; 
  
    function increment(event) {
      count++;
      updateCounterDisplay(event.target.parentNode);
    }
  
    function decrement(event) {
      if (count > 0) {
        count--;
        updateCounterDisplay(event.target.parentNode);
      }
    }
  
    function updateCounterDisplay(container) {
      const display = container.querySelector(".counter-display");
      display.textContent = count;
    }
  
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "10px", border: "1px solid blue", padding: "10px" }}>
        <button style={{ padding: "10px", backgroundColor: "blue", color: "white" }} onClick={decrement}>-</button>
        <span className="counter-display">{count}</span>
        <button style={{ padding: "10px", backgroundColor: "blue", color: "white" }} onClick={increment}>+</button>
      </div>
    );
  }
  
  export default Counter;  