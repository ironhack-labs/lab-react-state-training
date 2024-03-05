import { useState } from "react";
import LikeButton from "../components/LikeButton";
import "./App.css";
import Counter from "../components/Counter";
import ClickablePicture from "../components/ClickablePicture";
import Dice from "../components/Dice";

function App() {
	const [like, setLike] = useState(0);
	const [counter, setCounter] = useState(0);

	return (
		<div className="App">
			<h1> LAB | React Training</h1>
			<LikeButton setLike={setLike} like={like} />
			<Counter setCounter={setCounter} counter={counter} />
			<ClickablePicture />
			<Dice />
		</div>
	);
}

export default App;
