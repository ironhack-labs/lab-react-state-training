import "./App.css"
import LikeButton from "./Components/Likebutton/LikeButton"
import Counter from "./Components/Counter/Counter"
import ClickablePicture from "./Components/ClickablePicture/ClickablePicture"
import Dice from "./Components/Dice/Dice"


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <h2>Iteration 1</h2>
      <LikeButton></LikeButton>

      <hr />

      <h2>Iteration 2</h2>
      <Counter></Counter>

      <hr />

      <h2>Iteration 3</h2>
      <ClickablePicture></ClickablePicture>

      <hr />

      <h2>Iteration 4</h2>

      <Dice></Dice>

    </div>
  )
}

export default App









