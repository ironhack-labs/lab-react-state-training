import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import normalImage from "../assets/images/maxence.png";
import clickedImage from "../assets/images/maxence-glasses.png";
import ClickablePicture from "./components/ClickablePicture";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickablePicture img={normalImage} imgClicked={clickedImage} />
    </div>
  );
}

export default App;
