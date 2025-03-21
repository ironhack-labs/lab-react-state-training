import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";


export function Dice ({randomNr}) {
    const dices = [
      {
        number: diceEmpty,
        alt: "dice is rolling"},
      {
        number: dice1,
        alt: "Dice showing one",
      },
      {
        number: dice2,
        alt: "Dice showing two",
      },
      {
        number: dice3,
        alt: "Dice showing three",
      },
      {
        number: dice4,
        alt: "Dice showing four",
      },
      {
        number: dice5,
        alt: "Dice showing five",
      },
      {
        number: dice6,
        alt: "Dice showing six",
      },
    ];

    const emptyDice = dices[0]

    const randomDice = () => {
  
        return dices[randomNr(6, 1)]
    }

    const [dice, setDice] = useState(randomDice())

    const rollDice = () => {

        setDice(emptyDice)
        console.log("empty", emptyDice)
        console.log("first log", dice)
        setTimeout(() => {
            setDice(randomDice)
        }, 1000)

        console.log("second log", dice);
    }

    return (
        <>
        <div>
            <img onClick={rollDice} className="dice" src={dice.number} alt={dice.alt} />
        </div>
        </>
    )
}