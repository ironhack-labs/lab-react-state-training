import "./App.css";
import { LikeButton } from "./components/LikeButton.jsx";
import { CounterButtons } from "./components/Counter.jsx";
import { PicClick } from "./components/ClickablePicture.jsx";
import { Dice } from "./components/Dice.jsx";
function App() {
  return (
    <div className="App">
      <h1> Like Button</h1>
      <LikeButton />
      <h1>Counter</h1>
      <CounterButtons />
      <h1>Click the Boss</h1>
      <PicClick />
      <h1>Dice</h1>
      <Dice />
    </div>
  );
}

export default App;
