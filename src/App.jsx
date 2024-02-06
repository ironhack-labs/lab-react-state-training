
import "./App.css";


import LikeButton from "./components/LikeButton/LikeButton";
import Counter from "./components/Counter/Counter";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";


function App() {
  return (
    <div className="app">
      <h1> LAB | React Training</h1>

      <LikeButton />

      <Counter />

      <ClickablePicture />

    
    </div>
  );
}

export default App;