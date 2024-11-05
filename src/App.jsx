import "./App.css";
import Counter from "./components/Counter/Counter";
import LikeButton from "./components/LikeButton/LikeButton";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
import Dice from "./components/Dice/Dice";
import DiscoButton from "./components/DiscoButton/DiscoButton";
import Carousel from "./components/Carousel/Carousel";

function App() {

  return (

    <div className="App">

      <h1>Iteration 1</h1>

      <LikeButton bgColor='rgb(0 199 255)' />

      <LikeButton bgColor='rgb(21 230 68)' />

      <hr />

      <h1>Iteration 2</h1>

      <Counter />

      <hr />

      <h1>Iteration 3</h1>

      <ClickablePicture />

      <hr />

      <h1>Iteration 4</h1>

      <Dice />

      <hr />


      <h1>Iteration 5</h1>

      <DiscoButton />
      <DiscoButton />

      <hr />


      <h1>Iteration 6</h1>

      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"
        ]}
      />

      <hr />

    </div>

  );

}

export default App;
