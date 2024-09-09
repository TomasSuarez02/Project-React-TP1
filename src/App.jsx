import { useState } from 'react'
import './App.css'

function App() {
  const [numeroAdivinar, setNumeroAdivinar] = useState(Math.floor(Math.random() * 20) + 1);
  const [numeroIngresado, setNumeroIngresado] = useState('');
  const [mensaje, setMensaje] = useState('¡Intenta Adivinar el Número!');
  const [score, setScore] = useState(20);
  const [highscore, setHighScore] = useState(0);

  const handleInputChange = (event) => {
    setNumeroIngresado(event.target.value)
  };

  const verificarIntento = () => {
    if (numeroIngresado == numeroAdivinar) {
      setMensaje('¡El número ingresado es Correcto!');
      if (highscore < score) {
        setHighScore(score);
      }
    } else if (score == 0) {
      setMensaje('¡Perdiste! El número era: ' + numeroAdivinar);
    } else if (numeroIngresado < numeroAdivinar) {
      setMensaje('¡El número ingresado es Muy Bajo! Intenta con uno más alto.');
      setScore(score - 1);
    } else if (numeroIngresado > numeroAdivinar) {
      setMensaje('¡El número ingresado es Muy Alto! Intenta con uno más bajo.');
      setScore(score - 1);
    } 
  }

  const handleReiniciar = () => {
    setNumeroAdivinar(Math.floor(Math.random() * 20) + 1);
    setScore(20);
    setMensaje('¡Intenta Adivinar el Número!')
  }

  return (
    <>
      <button className='buttonReiniciar' onClick={handleReiniciar}>
        Reiniciar
      </button>
      <h1 className="titulo">¡Adivina el Número! (Entre 1 y 20)</h1>
      <div className="adivinar">
      <input type="number" value={numeroIngresado} onChange={handleInputChange}/>
      <button className="buttonIntento" onClick={verificarIntento}>
          ¡Probar suerte!
      </button>
      </div>
      <p>{mensaje}</p>
      <div className="score"> 
        <h4>Score: {score}</h4>
        <h4>High Score: {highscore}</h4>
      </div>
    </>
  )
}

export default App
