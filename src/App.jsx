import "./App.css";
import Clickable from "./components/Clickable";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      
      <h1> LAB | React Training</h1>
      <LikeButton/>
      <Counter/>
      <Clickable/>

    </div>
  );
}

export default App;
