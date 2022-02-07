import './StartGame.scss'

const StartGame = (props) =>{

  return <div>
    {props.isGameStopped? (props.isGameWin? <h3>Gratulacje, udało się odgadnąć wszystkie miasta, Twój czas to: {props.toMinutes(120 - props.counter)}</h3> :props.afterEndMessage) :<h3>Kliknik guzik aby rozpocząć quiz!</h3>}
    <button className='btn btn-start' onClick={props.handleStartGame}>start</button>
  </div>
}

export default StartGame