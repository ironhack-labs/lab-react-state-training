import "./App.css";
import Carousel from "./components/Carousel";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import LikeButton from "./components/LikeButton";

function App() {

  const images=[
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ];
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h1> Like Button Lab</h1>
      <LikeButton></LikeButton> 
      <Counter></Counter>
      <ClickablePicture></ClickablePicture>
      <Dice></Dice>
      <Carousel images = {images}></Carousel>
      

    </div>
  );
}

export default App;
