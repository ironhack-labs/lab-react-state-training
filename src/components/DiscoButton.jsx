import { useState } from 'react';//import the state function

function DiscoButton() {
	const [countLikes, setCountLikes] = useState(0);
	const [color, setColor] = useState(0);
	const colors = ["white", "purple", "blue", "green", "yellow", "orange", "red"];

	const twoClicksEvents = () => {
		setCountLikes(countLikes + 1);
		setColor((color + 1) % colors.length);//first move to next by adding 1 and then get the color by using the modulo operator on the lenght of the array.
	};

	return (//open and close empty html tags to indicate that this is the children tag
		<>
			<button onClick={twoClicksEvents} style={{ backgroundColor: colors[color] }}>{countLikes} Likes</button>
		</>
	)
}

export default DiscoButton;//export the function DiscoButton
