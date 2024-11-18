import { useState } from "react";

function Carousel({ images }) {
    // Estado para almacenar el índice de la imagen actual
    const [currentIndex, setCurrentIndex] = useState(0);

    // Función para ir a la imagen anterior - versión con ternario
    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    /* Modo facil

    const handleLeftClick = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1); // Ir a la última imagen si estamos en la primera
        } else {
            setCurrentIndex(currentIndex - 1); // Decrementar el índice
        }
    };
    
    */

   //para ir a la imagen de la derecha -  versión con ternario

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    /* Modo facil
            
    const handleRightClick = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0); // Ir a la primera imagen si estamos en la última
            } else {
                setCurrentIndex(currentIndex + 1); // Incrementar el índice
        }
    };
*/

    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={handleLeftClick}>Left</button>
            <img 
                src={images[currentIndex]} 
                alt="Carousel" 
                style={{ width: "200px", height: "200px", margin: "0 20px" }}
            />
            <button onClick={handleRightClick}>Right</button>
        </div>
    );
}

export default Carousel;
