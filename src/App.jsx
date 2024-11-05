import "./App.css";
import ClickeablePicture from "./components/ClickablePicture";
import Counter from "./components/counter";
import Dice from "./components/Dice/Dice";
import DiscoButton from "./components/DiscoButton/DiscoButton";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickeablePicture />
      <Dice />
      <DiscoButton />
    </div>
  );
}

export default App;
