import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div className="box">
        <LikeButton />
        <LikeButton />
      </div>
      <div className="box">
        <Counter />
      </div>
      <div className="box">
        <ClickablePicture />
      </div>
      <div className="box">
        <Dice />
      </div>
      <div className="box">
        <DiscoButton />
      </div>
      <div className="box">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
