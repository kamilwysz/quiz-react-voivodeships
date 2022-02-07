import './styles/global.scss';
import AddCapital from './components/AddCapital/AddCapital'
import GiveUp from './components/GiveUp/GiveUp'
import StartGame from './components/StartGame/StartGame'
import CapitalsList from './components/CapitalsList/CapitalsList'
import Result from './components/Result/Result'
import { useEffect, useState } from 'react';
import {capitals} from './data/dataCapitals'

function App() {
  let interval
  const [isGameActive, setGameActivity] = useState(false)
  const [isGameStopped, setGameStopped] = useState(false)
  const [isGameWin, setGameWin] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [counter, setCounter] = useState(120)

  useEffect(()=>{
  capitals.forEach(e=>{
    if (e.capital.toLowerCase()===inputValue.toLowerCase()){
      setInputValue("")
      e.isCapitalGuessed=true
    }
  })
  })
  useEffect(() => {
      let interval = null
      if (isGameActive){
      interval = setInterval(() => {
        setCounter(prevTime=>prevTime-1)
      }, 1000);
    }
    return () => clearInterval(interval)
    },[isGameActive])
  // Sprawdzenie wygranej
  useEffect(() => {
    if (guessedCapitals.length === capitals.length){
      handleWinGame()
    }
  });
  const handleStartGame=()=>{
    setGameActivity(true)
    setGameWin(false)
    setGameStopped(false)
    capitals.forEach((element)=>element.isCapitalGuessed=false)
    setCounter(120)
  }
  const handleEndGame=()=>{
    setGameActivity(false)
    clearInterval(interval)
    setGameStopped(true)
  }
  const handleWinGame=()=>{
    setGameActivity(false)
    clearInterval(interval)
    setGameWin(true)
    setGameStopped(true)
  }

  const toMinutes = e =>{
    let minutes = Math.floor(e/60)
    let seconds = e%60
    if (seconds<10){
      seconds = "0" + seconds
    }
    let time = minutes+":"+seconds
    return time
    }
  let guessedCapitals = capitals.filter(el => el.isCapitalGuessed);

  let afterEndMessage = <h3>Niestety nie udało się odgadnąć wszystkich stolic, Twój czas: {toMinutes(120-counter)}</h3>

  return (
    <div className="App">
      <AddCapital inputValue={inputValue} setInputValue={setInputValue} isGameActive={isGameActive}/>
        {isGameActive? <GiveUp 
        afterEndMessage={afterEndMessage}
        counter={counter}
        handleEndGame={handleEndGame}
        toMinutes={toMinutes}
        isGameStopped={isGameStopped}
      /> : <StartGame 
        handleStartGame={handleStartGame}
        isGameStopped={isGameStopped}
        setGameStopped = {setGameStopped}
        afterEndMessage={afterEndMessage} 
        toMinutes={toMinutes}
        counter={counter} 
        isGameWin = {isGameWin}
        />}
      <CapitalsList />
      <Result guessedCapitals={guessedCapitals}/>
    </div>
  );
}

export default App;
