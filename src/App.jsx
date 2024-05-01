import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";




function App() {
  return (
    <>
    <div className="App">
      <h1> LAB | React Training</h1>
    </div>
    
    <div>
      <LikeButton />
      <LikeButton />
    </div>
    <Counter />
    <ClickablePicture />
    </>
  );
}

export default App;
