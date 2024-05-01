import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
import Counter from "./components/Counter/Counter";
import Dice from "./components/Dice/Dice";
import DiscoButton from "./components/DiscoButton/DiscoButton";
import LikeButton from "./components/LikeButton/LikeButton";

function App() {
  return (
    <div className="App">
      <LikeButton />
      <br />
      <Counter />
      <br />
      <ClickablePicture />
      <br />
      <Dice />
      <br />
      <DiscoButton />
      <br />
      <Carousel images={[
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
        "https://randomuser.me/api/portraits/men/2.jpg"
      ]} />
    </div>
  );
}

export default App;
