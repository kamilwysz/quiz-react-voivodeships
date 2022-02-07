import './GiveUp.scss'
import Clock from '../Clock/Clock'

const GiveUp = (props) =>{

  return <div>
    {!props.isGameStopped? <Clock counter={props.counter} toMinutes={props.toMinutes}/> : <h3>{props.afterEndMessage}</h3>}
    <button className='btn btn-end' onClick={props.handleEndGame}>Poddaje się</button>
  </div>
}

export default GiveUp