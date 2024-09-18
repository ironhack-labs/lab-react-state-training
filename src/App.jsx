import "./App.css";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture"
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <ClickablePicture />
      <br />
      <br />
      <Dice />
    </div>
  );
}

export default App;
