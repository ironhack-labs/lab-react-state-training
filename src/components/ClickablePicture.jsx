import { useState } from "react";

// Importar las imágenes al principio
import maxenceImage from "./../assets/images/maxence.png";
import maxenceGlassesImage from "./../assets/images/maxence-glasses.png";

function ClickablePicture() {
  // Step 1: Inicializar el estado para realizar el seguimiento de qué imagen se está mostrando
  const [isImage1, setIsImage1] = useState(true); // Inicialmente se muestra la imagen 1

  // Step 2: Definir el controlador de clic para alternar entre imágenes
  const toggleImage = () => {
    setIsImage1(!isImage1); // Alternar el estado entre verdadero y falso
  };

  return (
    <div>
      {/* Step 3: Renderizar la imagen según el estado actual */}
      <img
        src={isImage1 ? maxenceImage : maxenceGlassesImage} // Usar las imágenes importadas en lugar de las rutas
        alt={isImage1 ? "Maxence without glasses" : "Maxence with glasses"} 
        onClick={toggleImage} // Llamar a toggleImage al hacer clic
        style={{ cursor: "pointer" }} // Añadir el cursor de puntero para indicar que la imagen es clickeable
        width="200" // Opcional: Definir el ancho de la imagen
        height="auto" // Opcional: Mantener la proporción de aspecto
      />
    </div>
  );
}

export default ClickablePicture;
