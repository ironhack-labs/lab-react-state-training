import Counter from "./components/Counter";

import "./App.css";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div>
        <h1>
          <LikeButton />

          <Counter />
        </h1>
      </div>
      <div>
        <ClickablePicture/>
      </div>
      <div>
        <Dice />
      </div>
    </div>
  );
}

export default App;
