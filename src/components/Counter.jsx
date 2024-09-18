import React from "react";
import { useState } from "react";

export default function Counter() {
  const [contador, setContador] = useState(0);

  const contadorSuma = () => {
    setContador(contador + 1);
  };

  const contadorResta = () => {
    if (contador - 1 < 0) {
      return;
    }
    setContador(contador - 1);
  };

  return (
    <div className="contenedor">
      <button className="botonContenedor" onClick={contadorResta}>-</button>
      <span>{contador}</span>
      <button  className="botonContenedor" onClick={contadorSuma}>+</button>
    </div>
  );
}
