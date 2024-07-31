import "./App.css";
import LikeButton from "./assets/components/LikeButton";
import Counter from "./assets/components/Counter";
import ClicklablePicture from "./assets/components/ClicklablePicture";
import Dice from "./assets/components/Dice";
import DiscoButton from "./assets/components/DiscoButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClicklablePicture />
      <Dice />
      <DiscoButton />
    </div>
  );
}

export default App;
