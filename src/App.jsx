import "./App.css";
import { ClickablePicture } from "./components/ClickablePicture";
import { Counter } from "./components/Counter";
import { Dice } from "./components/Dice";
import { LikeButton } from "./components/LikeButton";


function App() {
  return (
    <>
    
      <Dice />
      <ClickablePicture />
      <Counter />
      <LikeButton />
    </>
  );
}

export default App;