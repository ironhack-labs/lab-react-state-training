
export default function Dice({dicePic, onClick}) {
  return (
    <div>
       <img src={dice.clicked ? dicePic.emptyDice : dicePic.dice1 } alt={dice.Dice}
       onClick={onClick} 
       />
    </div>
  )
}
