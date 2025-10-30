import React from 'react'
import diceEmpty from '../assets/images/dice-empty.png'
import diceOne from '../assets/images/dice1.png'
import diceTwo from '../assets/images/dice2.png'
import diceTree from '../assets/images/dice3.png'
import diceFour from '../assets/images/dice4.png'
import diceFive from '../assets/images/dice5.png'
import diceSix from '../assets/images/dice6.png'

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const Dices = () => {
	const dices = [diceOne, diceTwo, diceTree, diceFour, diceFive, diceSix]
	const [dice, setDice] = React.useState(dices[getRandomNumber(0, 5)])
	const handleClick = () => {
		setDice(diceEmpty)
		setTimeout(() => {
			setDice(dices[getRandomNumber(0, 5)])
		}, 1000)
	}
	return (
		<div onClick={handleClick}>
			<img src={dice} width="300px" height="300px" />
		</div>
	)
}

export default Dices
