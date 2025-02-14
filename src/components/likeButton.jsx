import React, { useState } from 'react';

const LikeButton = () => {
  // Definimos state para guardar el número de likes
  const [likes, setLikes] = useState(0);

  // Creamos una función para ejecutar y actualizar los clicks.
  const quantity = () => {
    setLikes(likes + 1);
  };

  return (
    // Devolvemos el botón con el número de likes
    <button onClick={quantity}>
      {likes} Likes
    </button>
  );
};

export default LikeButton;
