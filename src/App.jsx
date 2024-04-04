
import "./App.css";
import Counter from "./components/Counter"
import LikeButton from "./components/LikeButton"
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import Carousel from "./components/Carousel";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div className="component-wrapper">
        <LikeButton />
        <LikeButton />
      </div>
      <div className="component-wrapper">
        <Counter />
      </div>
      <div className="component-wrapper">
        <ClickablePicture />
      </div>
      <div className="component-wrapper">
        <Dice />
      </div>
      <div className="component-wrapper">
        <DiscoButton />
      </div>
      <div className="component-wrapper">
        <Carousel basePath="https://randomuser.me/api/portraits" count={20} />
      </div>
    </div>
  );
}

export default App;

