import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice.jsx";

function App() {
  return (
    <>
      <LikeButton />

      <>
        <Counter />
      </>

      <>
        <ClickablePicture />
      </>

      <>
        <Dice />
      </>
    </>
  );
}

export default App;
