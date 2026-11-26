import "./App.css";
import Carousel from "./components/carousel";
import ClicablePicture from "./components/clicablePicture";
import Counter from "./components/Counter";
import Dice from "./components/dice";
import DiscoBtn from "./components/discoBtn";
import LikeBtn from "./components/likeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeBtn />
      <LikeBtn />
      <Counter />
      <ClicablePicture /> 
      <Dice />
      <DiscoBtn />
      <DiscoBtn />
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
