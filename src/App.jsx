import "./App.css";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
//import LikeButton from "./components/LikeButton";
import dice1 from "./assets/images/dice1.png";
import dice2 from "./assets/images/dice2.png";
import dice3 from "./assets/images/dice3.png";
import dice4 from "./assets/images/dice4.png";
import dice5 from "./assets/images/dice5.png";
import dice6 from "./assets/images/dice6.png";
import diceEmpty from "./assets/images/dice-empty.png";

const diceImages = [
  diceEmpty,
  dice1,
  dice2,
  dice3,
  dice4,
  dice5,
  dice6,
];
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <Counter />
      <ClickablePicture />
      <Dice diceImages={diceImages} />
      <DiscoButton />
    </div>
  );
}

export default App;
