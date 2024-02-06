import "./App.css";
import LikeButton from "./components/LikeButton/LikeButton";
import Counter from "./components/counter/Counter";
import ClickPic from "./components/ClickablePicture/ClickPic";
import Dice from "./components/Dice/Dice";

function App() {
  return (

    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButton />

      <Counter />

      <ClickPic />

      <Dice />



    </div>

  );
}

export default App;
