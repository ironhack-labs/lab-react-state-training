import { useState } from "react";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LikeButton />
      <LikeButton />

      <Counter />

      <ClickablePicture />
    </>
  );
}

export default App;
