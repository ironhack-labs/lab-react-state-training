<<<<<<< HEAD
// Componente Counter
// Muestra un contador con dos botones: + y -
// El contador nunca baja de 0
import { useState } from "react";

function Counter() {
  // Creamos una variable para guardar el valor del contador
  // Empieza en 0
  const [count, setCount] = useState(0);

  // Suma 1 al contador
  function handleAdd() {
    setCount(count + 1);
  }

  // Resta 1 al contador, pero solo si es mayor que 0
  function handleSubtract() {
=======

// This is a very simple counter
import { useState } from "react";

function Counter() {
  // count is the number, setCount changes it
  const [count, setCount] = useState(0);

  // Add 1 to count
  function addOne() {
    setCount(count + 1);
  }

  // Subtract 1 from count, but not less than 0
  function minusOne() {
>>>>>>> 6b96549a835e25fe87b5738709f3ea533e97dfcd
    if (count > 0) {
      setCount(count - 1);
    }
  }

<<<<<<< HEAD
  return (
    <div>
      <button onClick={handleSubtract}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={handleAdd}>+</button>
=======
  // Show the counter and two buttons
  return (
    <div>
      <button onClick={minusOne}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={addOne}>+</button>
>>>>>>> 6b96549a835e25fe87b5738709f3ea533e97dfcd
    </div>
  );
}

export default Counter;
