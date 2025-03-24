import "./App.css";
import { LikeButton } from "./components/LikeButton";
import { Counter } from "./components/Counter";
import { ClickablePicture } from "./components/ClickablePicture";
import { Dice } from "./components/Dice";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div className="it1">
        <LikeButton />
      </div>
      <div className="it2">
        <Counter />
      </div>
      <div className="it3">
        <ClickablePicture/>
      </div>
      <div className="it4">
        <Dice/>
      </div>
    </div>
  );
}

export default App;
