import { useState } from "react";

function LikeButton() {
  const [numLikes, setNumLikes] = useState(0);

  return (
    <div
      className="like-button"
      onClick={() => {
        setNumLikes(numLikes + 1);
      }}
    >
      <button>{numLikes} Likes</button>
    </div>
  );
}

/*function useState(valorPorDefecto) {
  let estado = valorPorDefecto;

  function modificarEstado(nuevoEstado) {
    estado = nuevoEstado;
  }

  const array = [estado, modificarEstado];

  return array;
}*/

export default LikeButton;
