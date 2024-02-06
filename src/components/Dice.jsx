import {useState} from 'react';
import dice0 from '/src/assets/images/dice-empty.png'
import dice1 from '/src/assets/images/dice1.png'
import dice2 from '/src/assets/images/dice2.png'
import dice3 from '/src/assets/images/dice3.png'
import dice4 from '/src/assets/images/dice4.png'
import dice5 from '/src/assets/images/dice5.png'
import dice6 from '/src/assets/images/dice6.png'

function Dice () {

    const diceImages = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];

    const [dice, newDice] = useState(dice3)

    const rollDice = () => {
        newDice(dice0);

setTimeout(() => {

    const randomNum = Math.floor(Math.random() * 6 + 1);
    newDice(diceImages[randomNum]);

}, 1000)



    }

    return(
        <img src={dice} onClick={rollDice}/>
    )

}
export default Dice;