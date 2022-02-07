import './AddCapital.scss'

const AddCapital = (props) =>{

  return <div>
    <h2>Odgadnij wszystkie miasta wojewódzkie:</h2>
    <input disabled={props.isGameActive? false : true } className="main-input" placeholder="Dodaj miasto wojewódzkie:" value={props.inputValue} onChange={e=>props.setInputValue(e.target.value)}></input>
  </div>
}

export default AddCapital