import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
import CounterButton from "./components/CounterButton/CounterButton";
import Dice from "./components/Dice/Dice";
import DiscoButton from "./components/DiscoButton/DiscoButton";
import LikeButton from "./components/LikeButton/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <main className="main">
        <h2 className="h2">Like button!</h2>
        <LikeButton />
        <LikeButton />
        <hr />
        <h2 className="h2">Increment number!</h2>
        <CounterButton />
        <hr />
        <h2 className="h2">Change picture</h2>
        <ClickablePicture />
        <hr />
        <h2 className="h2">Dice game</h2>
        <Dice />
        <h2 className="h2">Disco Button</h2>
        <DiscoButton/>
        <DiscoButton/>
        <h2 className="h2">Carousel</h2>
        <Carousel />
      </main>
    </div>
  );
}

export default App;
