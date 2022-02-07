const Clock = (props) =>{

  return <div>
    <h3>Pozostało czasu: {props.toMinutes(props.counter)}</h3>
  </div>
}

export default Clock