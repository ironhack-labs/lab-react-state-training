import "./App.css";
import LikeButton from "./Components/LikeButton";
import Counter from "./Components/Counter";
import ClickablePicture from "./Components/ClickablePicture";
import Dice from "./Components/Dice";
import DiscoButton from "./Components/DiscoButton";
import Carousel from "./Components/Carousel";


function App() {
  const imagesArray=[
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ];
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
      <DiscoButton />
      <Carousel images={imagesArray}/>
    </div>
  );
}

export default App;
