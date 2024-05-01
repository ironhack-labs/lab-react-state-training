import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LikeButton </h1>
      <LikeButton />

      <h1> Counter </h1>
      <Counter />

      <h1> ClickablePicture </h1>
      <ClickablePicture />

      <h1> Dice </h1>
      <Dice />
    </div>
  );
}

export default App;
