import "./App.css";
import { ClickablePicture } from "./components/ClickablePicture";
import { Counter } from "./components/Counter";
import { LikeButton } from "./components/LikeButton";

function App() {
  return (
    <>
      <ClickablePicture />
      <Counter />
      <LikeButton />
    </>
  );
}

export default App;
