import "./App.css";
import Carousel from "./components/Carousel";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import LikeButton from "./components/LikeButton";

const galleryImages = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg"
]

function App() {

  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <p>
        <LikeButton />
        <LikeButton />
      </p>
      <p>
        <Counter />
      </p>
      <p>
        <ClickablePicture />
      </p>
      <p>
        <Dice />
      </p>
      <p>
        <DiscoButton />
        <DiscoButton />
      </p>
      <p>
        <Carousel images={galleryImages} />
      </p>
    </div>
  );
}

export default App;
