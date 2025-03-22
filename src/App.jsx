import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";

import maxence from "./assets/images/maxence.png";
import maxenceGlasses from "./assets/images/maxence-glasses.png";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <Counter />
      <ClickablePicture img={maxence} imgClicked={maxenceGlasses}/>
      <LikeButton />
      <Dice className = "dice" />
    </div>
  );
}

export default App;
