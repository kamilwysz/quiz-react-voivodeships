import './Result.scss'
import {capitals} from '../../data/dataCapitals'

const Result = props =>{
  
  return <div>
    <h2>Wynik: {props.guessedCapitals.length}/{capitals.length}</h2>
  </div>
}

export default Result