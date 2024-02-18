import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClikablePicture from "./components/ClickablePicture";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClikablePicture />
      {/* <Dice />  */}
    </div>
    
  );
}

export default App;
