import "./App.css";
import { ClickablePicture } from "./components/ClickablePicture";
import { Counter } from "./components/Counter";
import { Dice } from "./components/Dice";
import { LikeButton } from "./components/LikeButton";
import { DiscoButton } from "./components/DiscoButton";
import { Carousel } from "./components/Carousel";



function App() {
  return (
    <div className="all">
      <LikeButton />   
      <Counter />
      <ClickablePicture />
      <Dice />
      <DiscoButton />
      <Carousel />
    </div>
  );
}

export default App;
