import "./App.css";
import LikeButton from "./Components/likeButton";
import Counter from "./Components/Counter";
import ClickablePic from "./Components/ClickablePic";
import Dice from "./Components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickablePic />
      <Dice />
    </div>
  );
}

export default App;
