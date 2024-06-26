import { useState } from "react";


const Dice = () => {
    const diceRolls = ["src/assets/images/dice2.png", "src/assets/images/dice3.png", "src/assets/images/dice1.png", "src/assets/images/dice4.png", "src/assets/images/dice5.png", "src/assets/images/dice6.png"];
    const [rolled, setRolled] = useState("src/assets/images/dice-empty.png");

  const roll = () => {
        const randomDice = Math.floor(Math.random() * (diceRolls.length ));
        setRolled(diceRolls[randomDice])
    } 

    setTimeout(() =>{
        setRolled("src/assets/images/dice-empty.png", "src/assets/images/dice2.png", "src/assets/images/dice3.png", "src/assets/images/dice1.png", "src/assets/images/dice4.png", "src/assets/images/dice5.png", "src/assets/images/dice6.png");
    }, 1000);

    return (
<div>
    <img src={rolled} onClick={roll} alt="Dice"/>
</div>
    )
}
 
export default Dice;