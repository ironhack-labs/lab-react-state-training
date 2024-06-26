import { useState } from "react";


function Dice(){
    const [diceSide, setDiceSide] = useState(0);
const rollDice = () => {
    setDiceSide(0);
    setTimeout(() => {
        setDiceSide(Math.ceil(Math.random()*6));
    }, 1000);
}
    return <>
    <img
      src={diceSide === 1 ? 'src/assets/images/dice1.png'
      :diceSide === 2 ? 'src/assets/images/dice2.png'
      :diceSide === 3 ? 'src/assets/images/dice3.png'
      :diceSide === 4 ? 'src/assets/images/dice4.png'
      :diceSide === 5 ? 'src/assets/images/dice5.png'
      :diceSide === 6 ? 'src/assets/images/dice6.png'
      : 'src/assets/images/dice-empty.png'}
      alt={diceSide === 1 ? "rolledOne"
      :diceSide === 2 ? "rolledTwo"
      :diceSide === 3 ? "rolledThree"
      :diceSide === 4 ? "rolledFour"
      :diceSide === 5 ? "rolledFive"
      :diceSide === 6 ? "rolledSix"
      : "blank"}
      onClick={rollDice}
    />
    </>
}

export default Dice;