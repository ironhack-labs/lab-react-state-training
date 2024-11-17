import './Dice.css'
import { useState } from "react";

function getRandomFace () {
    const randomNumber = Math.ceil(Math.random()*6);
    return randomNumber;
} //This works

const diceFacesArray = [/* './src/assets/images/dice1.png', './src/assets/images/dice2.png', './src/assets/images/dice3.png', './src/assets/images/dice4.png', './src/assets/images/dice5.png', './src/assets/images/dice6.png' */];

for(let i = 0; i < 6; i++) {
    diceFacesArray.push(`./src/assets/images/dice${i+1}.png`);
}
console.log(diceFacesArray);



function Dice() {
    const [diceFace, setDiceFace] = useState(0);
    return (

        <div className='img-wrapper'>
            <img onClick={
                () => {
                    setDiceFace(0);
                    setTimeout(() => setDiceFace(getRandomFace), 1000);
                }} src={diceFace===0? './src/assets/images/dice-empty.png' : diceFacesArray[diceFace-1]} alt="dice" />
        </div>
    )
}

export default Dice;