// Componente ClickablePicture
// Muestra una imagen que cambia al hacer clic
import { useState } from "react";
import imgNormal from "../assets/images/maxence.png";
import imgWithGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  // Creamos una variable para saber qué imagen mostrar
  // Empieza mostrando la imagen normal
  const [withGlasses, setWithGlasses] = useState(false);

  // Cambia la imagen cada vez que haces clic
  function handleClick() {
    setWithGlasses(!withGlasses);
  }

  return (
    <img
      src={withGlasses ? imgWithGlasses : imgNormal}
      alt="Foto"
      onClick={handleClick}
      style={{ cursor: "pointer", width: "200px" }}
    />
  );
}

export default ClickablePicture;
