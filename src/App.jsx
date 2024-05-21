import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import img from "./assets/images/maxence.png"
import imgClicked from "./assets/images/maxence-glasses.png"
import Dice from "./components/Dice";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButton />

      <Counter />

      <ClickablePicture img={img} imgClicked={imgClicked}/>

      <Dice />


    </div>
  );
}

export default App;
