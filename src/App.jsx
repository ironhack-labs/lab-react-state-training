import "./App.css";
import Carousel from "./components/Carousel";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import LikeButton from "./components/LikeButton";

function App() {
	return (
		<>
			<div className="App">
				<h1> LAB | React Training</h1>
			</div>
			<div className="card-like">
				<LikeButton />
				<LikeButton />
			</div>

			<div className="card-counter">
				<Counter />
			</div>
			<div className="card-image">
				<ClickablePicture />
			</div>
			<div className="card-dado">
				<Dice />
			</div>
			<div className="card-like">
				<DiscoButton />
				<DiscoButton />
			</div>
			<div>
				<Carousel /> 
				 </div>
		</>
	);
}

export default App;
