import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div id="iteration1">
        <h2>Iteration 1 | LikeButton</h2>
        <LikeButton />
        <LikeButton />
      </div>
      <div id="iteration2">
        <h2>Iteration 2 | Counter</h2>
        <Counter />
      </div>
      <div id="iteration3">
        <h2>Iteration 3 | State: ClickablePicture</h2>
        <ClickablePicture />
      </div>
      <div id="iteration4">
        <h2>Iteration 4 | State: Dice</h2>
        <Dice />
      </div>
      <div id="iteration5">
        <h2>Bonus: Iteration 5 | DiscoButton</h2>
        <DiscoButton />
      </div>
      <div id="iteration6">
        <h2>Bonus: Iteration 6 | Carousel</h2>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
