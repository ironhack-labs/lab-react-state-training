import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <br />
      <h2> Like Button</h2>
      <LikeButton />
      <h2>Iteration 2 | State: Counter</h2>
      <Counter />
      <h3> Clickable Picture</h3>
      <ClickablePicture /> 
      <h2> Dice</h2>
      <Dice />
    </div>
  );
}

export default App;
