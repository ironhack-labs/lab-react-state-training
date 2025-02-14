import React, { useState } from 'react';

const Dice = () => {
    // Definimos state para guardar la imagen actual
    const random = Math.floor(Math.random() * 6) + 1 //Le hacemos elegir un número del 1 al 6
    const [image, setImage] = useState(`src/assets/images/dice${random}.png`);

    // Creamos una función para actualizar la imagen
    const randomDice = () => {

        setImage(`src/assets/images/dice-empty.png`) //Comenzamos con el valor vacío que estará 1s
        setTimeout(() => {
            setImage(`src/assets/images/dice${random}.png`) //le damos el resultado final
        }, 1000) // Le ponemos un delay de 1s
    }

    return (
        //Creamos el div con la imagen
        <div>
            <img
                src={image}
                alt="Dice"
                onClick={randomDice}
            />
        </div>
    );
}
export default Dice;