import './Capital.scss'

const Capital = (props) =>{

  return (
  <tr>
    <td className='voivodeship-td'>{props.voivodeship}</td>
    <td className='capital-td'>{props.isCapitalGuessed? props.voivodeshipCapital : null}</td>
  </tr>)
}

export default Capital