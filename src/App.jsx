import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import ClickablePicture from "./components/ClickablePicture";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <DiscoButton />
      <ClickablePicture />
      <Dice />
    </div>
  );
}

export default App;
