import React, { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	const minusCount = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<div className="counter-container">
			<button className="count minus" onClick={() => minusCount()}>
				-
			</button>
			<div>{count}</div>
			<button className="count plus" onClick={() => setCount(count + 1)}>
				+
			</button>
		</div>
	);
};

export default Counter;
