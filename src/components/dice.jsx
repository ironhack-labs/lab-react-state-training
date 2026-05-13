import { useState } from "react";

function Dice() {
  const [number, setNumber] = useState("src/assets/images/dice3.png")

  function randomDice() {

    (setNumber("src/assets/images/dice-empty.png"))

    setTimeout(()=> {
    const randomNumber = Math.floor(Math.random() * 6 + 1)
    if (randomNumber === 1) {setNumber("src/assets/images/dice1.png")
    } else if (randomNumber === 2) {setNumber("src/assets/images/dice2.png")}
    else if (randomNumber === 3) {setNumber("src/assets/images/dice3.png")}
    else if (randomNumber === 4) {setNumber("src/assets/images/dice4.png")}
    else if (randomNumber === 5) {setNumber("src/assets/images/dice5.png")}
    else if (randomNumber === 6) {setNumber("src/assets/images/dice6.png")}

    }, 1000)
  }

  return (
    <div>
      <img onClick={randomDice} src={number} />
    </div>
  )
}

export default Dice;
