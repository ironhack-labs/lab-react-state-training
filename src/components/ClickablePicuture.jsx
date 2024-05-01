import React from "react";
import { useState } from "react";
import foto1 from "../assets/images/foto1.png";
import foto2 from "../assets/images/foto2.png";

function ClickablePicuture() {
  const [foto, setFoto] = useState(foto1);
  const handleClick = () => {
    if (foto === foto1) {
      setFoto(foto2);
    } else {
      setFoto(foto1);
    }
  };

  return (

  <div>
    <button onClick={handleClick}> <img src= {foto} /> </button>
  </div>



)
}

export default ClickablePicuture;
