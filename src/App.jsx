import "./App.css";
import LikeButton from "./components/LikeButton"
import Counter from "./components/Counter"
import ClickablePicture from "./components/ClickablePicture"
import Dice from "./components/Dice"


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <h2>Like button</h2>
      <LikeButton />

      <h2>Counter</h2>
      <Counter />

      <h2>Clickable Picture</h2>
      <ClickablePicture />

      <h2>Dice</h2>
      <Dice />

    </div>
  );
}

export default App;
