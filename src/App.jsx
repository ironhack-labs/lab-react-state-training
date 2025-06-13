import "./App.css";
import Carousel from "./components/Carousel";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import LikeButton from "./components/LikeButton";
import { images } from "./lib/imageArray";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <hr />
      <LikeButton id="like1" />
      {" "}
      <LikeButton />
      <hr />
      <Counter />
       <hr />
       <ClickablePicture />
       <hr />
       <Dice />
       <hr />
       <DiscoButton />
       <DiscoButton />
       <hr />
       <Carousel imgArr={images} />
    </div>
  );
}

export default App;
