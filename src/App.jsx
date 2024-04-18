// import "./App.css";
import "../src/App.css";
import "./components/LikeButton";
import LikeButton from "./components/LikeButton";
import Counter from "./components/counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton /> <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
    </div>
  );
}

export default App;
