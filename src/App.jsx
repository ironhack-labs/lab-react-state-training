import "./App.css";
import ClickablePicture from "./ClickablePicture";
import Dice from "./Dice";
import LikesButton from "./counter";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikesButton />
      <ClickablePicture />

      <Dice />

    </div>

  );
}

export default App;
