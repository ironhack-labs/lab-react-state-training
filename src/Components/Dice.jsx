import React, { useState } from 'react';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png'; 
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import emptyDice from '../assets/images/dice-empty.png';
import './Dice.css'; 


function Dice() {
  const [isClicked, setIsClicked] = useState(false);
 
  function handleClick() {
    setIsClicked(!isClicked);
    
  }
  
  const dicePictures = [dice1, dice2, dice3, dice4, dice5, dice6];
  const randomDice = Math.floor(Math.random() * dicePictures.length);
  const randomImage = dicePictures[randomDice];

  return (

    <div className="dice-container" onClick={handleClick}> 
    <img src={!isClicked ? emptyDice : randomImage} alt="Dice" /></div>

  
    

  );
}
export { Dice };