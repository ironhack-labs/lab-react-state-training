import "./App.css";
import LikeButton from "./components/LikeButton.jsx";
import Counter from "./components/counter/Counter.jsx";
import Dice from "./components/Dice/Dice.jsx";
import ClickablePicture from "./components/ClikablePicture/ClikablePicture.jsx";

function App() {
  return (
    <div className="App">
      <h1>LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
    </div>
  );
}

export default App;
