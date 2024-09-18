import "./App.css";
import Carrousel from "./components/Carrousel";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import LikeButton from "./components/LikeButton";

function App() {
  
  let images =[
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ]

  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <hr />
      <LikeButton/>
      <LikeButton/>
      <hr />
      <Counter/>
      <hr />
      <ClickablePicture/>
      <hr />
      <Dice/>
      <hr />
      <DiscoButton/>
      <DiscoButton/>
      <hr />
      <Carrousel vista = {images}/>
    </div>
  );
}

export default App;
