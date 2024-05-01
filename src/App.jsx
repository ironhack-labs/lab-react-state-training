import "./App.css"
import Counter from './components/Counter/Counter'
import LikeButton from "./components/LikeButton/LikeButton"
import ClickablePicture from './components/ClickablePicture/ClickablePicture'
import Dice from "./components/Dice/Dice"

function App() {
  return (
    <div className='App'>
      <LikeButton />
      <hr />
      <Counter />
      <hr />
      <ClickablePicture />
      <hr />
      <Dice />
      <hr />
    </div>
  )
}

export default App
