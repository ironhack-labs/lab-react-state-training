import React, { useState } from "react";
import dice0 from "../assets/images/dice0.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  let dices = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];

  /*
function randomNumber() {return Math.floor(Math.random() * (5 - 0 + 1) + 0);}
const [dieNumber, setDieNumber] = useState(randomNumber);
    return(
<div>
    <img onClick={() => setDieNumber(randomNumber())} src={dices[dieNumber]}/>
</div>

    )
*/
  function randomNumber() {
    return Math.floor(Math.random() * (6 - 1 + 1) + 1);
  }
  const [dieNumber, setDieNumber] = useState(randomNumber);

  function rollRandom() {
    setDieNumber(randomNumber());
  }

  //

  const rollDice = () => {
    const diceTimer = setTimeout(rollRandom, 1000);
    setDieNumber(0);
    //setInterval(rollRandom, 1000);
    diceTimer();
  };

  return (
    <div>
      <img src={dices[dieNumber]} onClick={rollDice} />
    </div>
  );
}

export default Dice;
