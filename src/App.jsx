import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import LikeButton from "./components/LikeButton";

function App() {
  return (

    <>
      <div className="App">
        <h1> LAB | React Training</h1>
      </div>
      <LikeButton/>
      <Counter/>
      <ClickablePicture/>
      <Dice/>
    </>
  );
}

export default App;
