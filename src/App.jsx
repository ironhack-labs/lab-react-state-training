import "./App.css";
import LikeButton from "./components/LikeButton/LikeButton"
import Counter from "./components/Counter/Counter"
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
import Dice from "./components/Dice/Dice";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h2>Like Button</h2>
      <LikeButton />
      <hr />
      <h2>Counter</h2>
      <Counter />
      <hr />
      <h2>Clickable Picture</h2>
      <ClickablePicture />
      <h2>Dice</h2>
      <Dice />
    </div>
  )
}

export default App;
