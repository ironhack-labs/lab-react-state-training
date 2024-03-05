import React, { useState } from "react";

import diceEmpty from "../src/assets/images/dice-empty.png";
import dice1 from "../src/assets/images/dice1.png";
import dice2 from "../src/assets/images/dice2.png";
import dice3 from "../src/assets/images/dice3.png";
import dice4 from "../src/assets/images/dice4.png";
import dice5 from "../src/assets/images/dice5.png";
import dice6 from "../src/assets/images/dice6.png";

export default function Dice() {
	const [currentDice, setCurrentDice] = useState(dice3);
	const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

	const clickDice = () => {
		setCurrentDice(diceEmpty);
		setTimeout(() => {
			const randomDice = diceImages[Math.floor(Math.random() * 6)];
			setCurrentDice(randomDice);
		}, 1000);
	};

	return (
		<img
			src={currentDice}
			alt="Dice"
			onClick={clickDice}
			style={{ cursor: "pointer", width: "100px", height: "100px" }}
		/>
	);
}
