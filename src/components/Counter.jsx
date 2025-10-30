import { useState } from 'react'

const LikeButton = () => {
	const [count, setCount] = useState(0)

	const handlePlus = () => setCount((p) => p + 1)
	const handleMinus = () => {
		count > 0 ? setCount((p) => p - 1) : null
	}

	return (
		<div className="btn">
			<p>
				<button className="btn-counter" onClick={handleMinus}>
					-
				</button>
				{count}
				<button className="btn-counter" onClick={handlePlus}>
					+
				</button>
			</p>
		</div>
	)
}

export default LikeButton
