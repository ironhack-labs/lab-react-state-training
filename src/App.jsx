import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";

import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1>Lab State Training</h1>

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
