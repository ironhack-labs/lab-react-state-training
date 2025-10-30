import { useState } from 'react'

const DiscoButton = () => {
	const colours = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
	const [count, setCount] = useState(0)
	const [colour, setColour] = useState('purple')
	const colIndex = () => {
		return Math.floor(Math.random() * colours.length)
	}
	const handleClick = () => {
		setCount(count + 1)
		setColour(colours[colIndex()])
	}
	return (
		<button className={`btn-${colour}`} onClick={handleClick}>
			{count} Likes
		</button>
	)
}

export default DiscoButton
