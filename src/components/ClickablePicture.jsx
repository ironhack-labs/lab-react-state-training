import React, { useState } from 'react';

const ClickablePicture = () => {
  // Definimos state para guardar la imagen actual
  const [toggle, setToggle] = useState(false);

  // Creamos una función para actualizar la imagen
  const firstImage =`src/assets/images/maxence.png`
  const secondImage = `src/assets/images/maxence-glasses.png`
//Función para cambiar de imagen
  const click = () => {
    setToggle(!toggle)
  }
  
  return (
    //Creamos el div con la imagen y la función que la intercambia
 <div>
<img
src={!toggle ? `src/assets/images/maxence.png` : `src/assets/images/maxence-glasses.png`} // Si toggle es no entonces 1º imagen, si es si 2º imagen
alt="Clickable"
onClick={click}
/>
 </div>
  );
};

export default ClickablePicture;