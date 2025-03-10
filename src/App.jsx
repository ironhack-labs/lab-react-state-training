import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from './components/Dice';
import Carousel from "./components/Carousel";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton/> <LikeButton/>
      <Counter/>
      <ClickablePicture/>
      <Dice/>
      <Carousel />

    </div>
  );
}


export default App;
