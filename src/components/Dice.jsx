import React from "react";
import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import diceOne from "../assets/images/dice1.png";
import diceTwo from "../assets/images/dice2.png";
import diceThree from "../assets/images/dice3.png";
import diceFour from "../assets/images/dice4.png";
import diceFive from "../assets/images/dice5.png";
import diceSix from "../assets/images/dice6.png";

function Dice() {
  //we will need a useState constant which the standard state 0 is "empty"
  //this because when user clicks it needs to go back to empty image, and only afterwards change

  const [currentDice, setCurrentDice] = useState(diceEmpty);
  //we need an array of all images to alternate btw them based on index
  const allDice = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

  //randomly pick from the index of allDice - length starts at 1-6, but here is excluding the length
  let randomDiceIndex = Math.floor(Math.random() * allDice.length);
  //range from 0 to 5 inclusive
  // math.random returns from 0-1 inclusive
  // When you multiply Math.random() by the allDice.length, the result will be in the range from 0 (inclusive) to the length of allDice (exclusive).

  const rollDice = () => {
    //when we roll the dice
    setCurrentDice(diceEmpty); //we first setback to empty to display the empty img state
    setTimeout(() => {
      //then a setTimeout of 1 second to pick a new image
      //the new current img will be a random index from allDice[?]
      setCurrentDice(allDice[randomDiceIndex]);
    }, 1000);
  };

  return (
    <div className="DiceContainer">
      <h2>Iteration 4 - Dice</h2>
      <img onClick={rollDice} src={currentDice} alt="dice" />
    </div>
  );
}

export default Dice;
