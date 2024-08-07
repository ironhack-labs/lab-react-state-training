import "./App.css";
import LikeButton from "./Components/LikeButton";
import Counter from "./Components/Counter";
import ClickablePicture from "./Components/ClickablePicture";
import Dice from "./Components/Dice";
import DiscoButton from "./Components/DiscoButton";

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
