import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);
	const changeCount = (operator) => {
		if (operator === "plus") {
			setCount(count + 1);
		} else if (operator === "minus" && count > 0) {
			setCount(count - 1);
		}
	};
	return (
		<div className="counter">
			<button
				onClick={() => {
					changeCount("minus");
				}}
			>
				-
			</button>
			<div className="number">{count}</div>
			<button
				onClick={() => {
					changeCount("plus");
				}}
			>
				+
			</button>
		</div>
	);
}
