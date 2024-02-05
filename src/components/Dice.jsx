import {useState} from 'react';

function Dice () {

    const [dice, newDice] = useState('./src/assets/images/dice3.png')

    const rollDice = () => {
        newDice('./src/assets/images/dice-empty.png')

setTimeout(() => {

    const randomNum = Math.floor(Math.random() * 6 + 1)
    newDice(`.src/assets/images/dice${randomNum}.png`)

}, 1000)



    }

    return(
        <img src={dice} onClick={rollDice}/>
    )

}
export default Dice;