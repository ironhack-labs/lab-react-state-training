import "./App.css";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscountButton";
import Carousel from "./components/Carousel";

function App() {
  const image1 = "src/assets/images/maxence-glasses.png";
  const image2 = "src/assets/images/maxence.png";

  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <DiscoButton />
      <ClickablePicture image1={image1} image2={image2} />
      <Carousel />
      <Dice />
    </div>
  );
}

export default App;
