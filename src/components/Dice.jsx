import React, { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {
	const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
	const [image, setImage] = useState(dice3);
	const [counter, setCounter] = useState(1);
	const changeImage = () => {
		setCounter(counter + 1);
		if (counter === 1) {
      console.log(counter);
			setImage(diceEmpty);
		} else {
      console.log(`test`);
			setTimeout(() => {
				setImage(diceImages[Math.floor(Math.random() * diceImages.length)]);
			}, 1000);
		}
	};

	return (
		<div className="dice-container">
			<img onClick={changeImage} src={image} alt="" />
		</div>
	);
};

export default Dice;
