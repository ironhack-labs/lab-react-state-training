import "./App.css";
import LikeButton from "../src/components/LikeButton";
import Counter from "../src/components/Counter";
import ClickablePicture from "../src/components/ClickablePicture ";
import Dice from "../src/components/Dice";
import DiscoButton from "../src/components/DiscoButton";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
      <DiscoButton />
    </div>
  );
}

export default App;
