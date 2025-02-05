import "./App.css";
import Carousel from "./components/Carousel";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div className = "like-buttons">
        <LikeButton />
        <LikeButton />
      </div>

      <Counter />

      <ClickablePicture img="src\assets\images\maxence.png" imgClicked="src\assets\images\maxence-glasses.png" />

      <Dice />

      <div className = "like-buttons">
        <DiscoButton />
        <DiscoButton />
      </div>

      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"
        ]}
      />

    </div>
  );
}

export default App;
