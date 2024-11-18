
import { useState } from "react";

function DiscoButton({ className = "", variant = "primary" }) {
    // Estado para el número de Likes
    const [count, setCount] = useState(0);

    // Estado para el índice de color actual
    const [colorIndex, setColorIndex] = useState(0);

    // Array de colores de fondo
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

    // Función para manejar el clic
    const handleClick = () => {
        // Incrementar el número de Likes
        setCount(count + 1);

        // Cambiar al siguiente color
        setColorIndex((colorIndex + 1) % colors.length); // Para hacer un bucle de colores
    };

    return (
        <button 
            type="button" 
            onClick={handleClick}
            className={`m-3 btn btn-lg ${className}`}
            style={{ backgroundColor: colors[colorIndex], color: "white" }} 
            // Aplicar color dinámico
        > 
            {count} Likes
        </button>
    );
}

export default DiscoButton;