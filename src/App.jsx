import "./App.css";
import LikeButton from "./components/LikeButton/LikeButton";
import Counter from "./components/Counter/Counter"
import ClickablePicture from "./components/ClickablePicture/ClickablePicture"
import Dice from './components/Dice/Dice'

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <hr />
      <Counter />
      <hr />
      <ClickablePicture />
      <hr />
      <Dice />
    </div>
  );
}

export default App;
