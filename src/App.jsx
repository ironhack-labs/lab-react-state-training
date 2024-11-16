import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from './components/ClickablePicture';
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <br />
      <Counter />
      <br/>
      <ClickablePicture />
      <br />
      <Dice />
      <br />
      <DiscoButton />
      <DiscoButton />
      <br />
      <Carousel />
    </div>

  );
}

export default App;
