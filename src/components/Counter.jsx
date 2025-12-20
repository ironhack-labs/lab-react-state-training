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
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <button onClick={handleSubtract}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

export default Counter;
