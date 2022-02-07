import './CapitalsList.scss'
import Capital from '../Capital/Capital'
import {capitals} from '../../data/dataCapitals'

const CapitalsList = (props) =>{
const capitalsList = capitals.map((element)=>(
  <Capital voivodeship={element.voivodeship} voivodeshipCapital={element.capital} key={element.voivodeship} isCapitalGuessed={element.isCapitalGuessed}/>
))

  return <div>
    <table>
      <thead>
        <tr>
          <th>Wojwództwo</th>
          <th>Stolica</th>
        </tr>
      </thead>
      <tbody>
        {capitalsList}
      </tbody>
    </table>
  </div>
}

export default CapitalsList