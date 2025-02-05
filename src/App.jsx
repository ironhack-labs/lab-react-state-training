import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";

import DiscoButton from "./components/DiscoButton";
import Dice from "./components/dice";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <div className="count-cont">
      <Counter />
      </div>
      <ClickablePicture />
      <Dice />
      <DiscoButton />
    </div>
  );
}

export default App;
