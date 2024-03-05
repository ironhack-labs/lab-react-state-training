import "./App.css";
import { ClickablePicture } from "./components/ClickablePicture";
import { Counter } from "./components/Counter";
import { Dice } from "./components/Dice";
import { LikeButton } from "./components/LikeButton";
import { DiscoButton } from "./components/DiscoButton";

function App() {
  return (
    <>
      <DiscoButton />
      <Dice />
      <ClickablePicture />
      <Counter />
      <LikeButton />
    </>
  );
}

export default App;
