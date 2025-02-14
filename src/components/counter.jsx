import React, { useState } from 'react';

const Counter = () => {
  // Definimos state para guardar el número
  const [counter, setCounter] = useState(0);

  // Creamos una función para ejecutar y aumentar el contador
  const increment = () => {
    setCounter(counter + 1);
  };
// Esta para reducirlo sin pasarse
  const decrement = () => {
    if (counter > 0){
    setCounter(counter - 1);
  }};
  return (
    // Devolvemos la cantidad según el botón pulsado
    <>
    {/* Número */}
    <p>{counter}</p>
    {/* suma */}
    <button onClick={increment}>+</button>
    {/* resta */}
    <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;
