import { useState } from 'react';//import the state function
import picEmpty from '../assets/images/dice-empty.png'
import pic1 from '../assets/images/dice1.png'
import pic2 from '../assets/images/dice2.png'
import pic3 from '../assets/images/dice3.png'
import pic4 from '../assets/images/dice4.png'
import pic5 from '../assets/images/dice5.png'
import pic6 from '../assets/images/dice6.png'

function Dice() {
	const dicePictures = [pic1, pic2, pic3, pic4, pic5, pic6];
	const getRandomDiceIndex = Math.floor(Math.random() * dicePictures.length);

	const [dice, setDice] = useState(picEmpty);//dice is the varaiable, setdice is the fucntion that updates de variable and picEmpty is the initial value of the variable

	const roll = () => {
		setDice(picEmpty);
		setTimeout(() => {
			setDice(dicePictures[getRandomDiceIndex]);
		}, 1000);
		setDice(picEmpty);
	};// the function setDice will be called after 1 second on the array dice pictures with the random index from the variable getRandomDiceIndex which will be displayed as the dice variable from the usee state function.


	return (//open and close empty html tags to indicate that this is the children tag
		<>
			<img width={500} onClick={() => setDice(roll)} src={dice} alt="Pictures alternating" />
		</>
	)//dice will be called through the setDice(roll), there is no need to be inside the fucntion, only when you need to call or show it.
}

export default Dice;