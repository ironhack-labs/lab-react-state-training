import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import Carousel from "./components/Carousel";

function App() {
  return (
    <section>
    <div className="App">
      <h1> LAB | React Training</h1>
    </div>

    <LikeButton></LikeButton>
    <Counter></Counter>
    <ClickablePicture></ClickablePicture>
    <Dice></Dice>
    <DiscoButton></DiscoButton>
    <Carousel
  images={[
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ]}
/>

    </section>
  );
}

export default App;
