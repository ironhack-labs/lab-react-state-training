import React from "react";
import { useState } from "react"


export default function LikeButton() {

  const [ contador, setContador ] = useState(0)
  

  const contadorSuma = () => {

    setContador(contador+1)
  }

  
 

  return (
   
     
        <button onClick={contadorSuma}>{contador}likes</button>
      
  
  );
}
