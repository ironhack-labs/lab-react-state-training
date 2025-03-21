import "./App.css";
import { LikeButton } from "./components/LikeButton";
import { Counter } from "./components/Counter";
import { ClickablePicture } from "./components/ClickablePicture";
import { Dice } from "./components/Dice";
import { DiscoButton } from "./components/DiscoButton";
import { Carousel } from "./components/Carousel";

function App() {
  

  const createRandomNr = (endNr, startNr=0) => {
    return Math.floor((Math.random() * endNr) + startNr)
  }

 
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice randomNr={createRandomNr} />
      <DiscoButton randomNr={createRandomNr} />
      <DiscoButton randomNr={createRandomNr} />
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />
    </div>
  );
}

export default App;
