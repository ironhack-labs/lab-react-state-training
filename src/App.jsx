import "./App.css";
import LikeButton from "./components/like-button.jsx";
import Counter from "./components/counter.jsx";
import ClickablePicture from "./components/clickable-picture.jsx";
import Dice from "./components/dice.jsx";
import DiscoButton from "./components/disco-button.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButton />
      <Counter />
      <ClickablePicture imageOn="./src/assets/images/maxence-glasses.png" imageOff="./src/assets/images/maxence.png" />
      <Dice />
      <DiscoButton />
    </div>
  );
}

export default App;
