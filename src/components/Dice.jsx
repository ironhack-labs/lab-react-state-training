import dadoTres from '../assets/images/dice3.png'
import dadoNada from '../assets/images/dice-empty.png'
import dadoSeis from '../assets/images/dice6.png'
import { useState } from 'react'


function Dice() {

  const [cambioImagen, setCambioImagen] = useState(dadoTres)

  const hacerClickDado = () => {
    if(cambioImagen === dadoTres){
      setCambioImagen(dadoNada);

      setTimeout(()=>{
        setCambioImagen(dadoSeis);
      },1000);
    }
  }


  return (
    <div className='dados'>
      <img onClick={hacerClickDado} src={cambioImagen} alt="primerDado" />
    </div>
  )
}

export default Dice