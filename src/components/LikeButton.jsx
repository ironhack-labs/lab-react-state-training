<<<<<<< HEAD
// Componente LikeButton
// Muestra un botón que cuenta los "likes" al hacer clic
// Cada vez que haces clic, suma 1
import { useState } from "react";

function LikeButton() {
  // Creamos una variable para guardar el número de likes
  // Empieza en 0
  const [likes, setLikes] = useState(0);

  // Esta función se ejecuta cuando haces clic en el botón
  function handleClick() {
    setLikes(likes + 1); // Suma 1 al número de likes
  }

  return (
    <button onClick={handleClick}>
=======

// Import the useState hook from React


import { useState } from "react";



function LikeButton() {
  const [likes, setLikes] = useState(0); // state for likes
  function addLike() {
    setLikes(likes + 1);
  }
  return (
    <button onClick={addLike}>
>>>>>>> 6b96549a835e25fe87b5738709f3ea533e97dfcd
      {likes} Likes
    </button>
  );
}

export default LikeButton;
