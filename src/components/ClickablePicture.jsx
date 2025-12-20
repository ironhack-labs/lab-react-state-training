<<<<<<< HEAD
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
=======

function ClickablePicture() {
  // Images are from the local assets/images folder
  const img = "/src/assets/images/maxence.png";
  const imgClicked = "/src/assets/images/maxence-glasses.png";
  const [clicked, setClicked] = useState(false); // true = glasses, false = normal
  // Toggle image when clicked
  return (
    <img
      src={clicked ? imgClicked : img}
      alt="Clickable"
      onClick={() => setClicked(!clicked)}
>>>>>>> 6b96549a835e25fe87b5738709f3ea533e97dfcd
      style={{ cursor: "pointer", width: "200px" }}
    />
  );
}

export default ClickablePicture;
