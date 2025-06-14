import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import LikeButtons from "./components/LikeButtons";
import { useState } from "react";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButtons />
      <LikeButtons />
      <Counter count={count} setCount={setCount} />
      <ClickablePicture />
      <Dice />
      <DiscoButton />
      <DiscoButton />
    </div>
  );
}

export default App;
