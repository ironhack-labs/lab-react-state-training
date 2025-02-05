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
      <div className="like-buttons">
        <LikeButton />
        <LikeButton />
      </div>
      <div className="counter">
        <Counter />
      </div>
      <div className="clickable-picture">
        <ClickablePicture />
      </div>
      <div className="dice">
        <Dice />
      </div>
      <div className="disco-button">
        <DiscoButton />
        <DiscoButton />
      </div>
      <div className="carousel">
        <Carousel/>
      </div>
    </div>
  );
}

export default App;
