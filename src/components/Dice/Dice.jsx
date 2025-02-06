import React, { useState } from 'react'
import './Dice.css';

function Dice() {
    const numbersDiceURL = [
        '/src/assets/images/dice-empty.png',
        '/src/assets/images/dice1.png',
        '/src/assets/images/dice2.png',
        '/src/assets/images/dice3.png',
        '/src/assets/images/dice4.png',
        '/src/assets/images/dice5.png',
        '/src/assets/images/dice6.png',
    ];

    const  [urlDice, setUrlDice] = useState(randomDice());

    function handleButtonDice () {
        showEmptyDice();
        setUrlDice('/src/assets/images/dice-empty.png');
    }
    
    function showEmptyDice() {
        setTimeout(() => {
            setUrlDice(randomDice());
        }, 1000);
    }

    function randomDice () {
        return numbersDiceURL[Math.floor(Math.random() * numbersDiceURL.length)];
    }
  return (
    <>
        <div className="dice">
            <img onClick={() => handleButtonDice()} src={urlDice} alt="dice" />
        </div>
    </>
  )
}

export default Dice