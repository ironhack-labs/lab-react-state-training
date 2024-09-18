import { useState } from 'react'
import imageVacia from '../assets/images/dice-empty.png'
import dados1 from '../assets/images/dice1.png'
import dados2 from '../assets/images/dice2.png'
import dados3 from '../assets/images/dice3.png'
import dados4 from '../assets/images/dice4.png'
import dados5 from '../assets/images/dice5.png'
import dados6 from '../assets/images/dice6.png'
function Dice() {
  const [isDado, setDado] = useState(imageVacia)
  let dados = [dados1, dados2, dados3, dados4, dados5, dados6]
  let dadosRandon = Math.floor(Math.random() * dados.length)
  const dadosAleatorios = () => {
    setTimeout(() => {
      setDado(dados[dadosRandon])
    }, '1000')
    setDado(imageVacia)
  }
  return (
    <div onClick={dadosAleatorios} style={{ margin: '20px' }}>
      <img style={{ width: '100px' }} src={isDado} alt="" />
    </div>
  )
}

export default Dice
