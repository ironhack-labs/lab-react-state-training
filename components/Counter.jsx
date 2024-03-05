export default function Counter({ setCounter, counter }) {
	return (
		<div className="containerCounter">
			<button className="btnCounter" onClick={() => setCounter(counter + 1)}>
				{" "}
				+
			</button>
			<span>{counter}</span>
			<button className="btnCounter" onClick={() => setCounter(counter - 1)}>
				-
			</button>
		</div>
	);
}
