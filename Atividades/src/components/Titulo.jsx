import './Titulo.css'

function Titulo(props) {
  return (
    <div className='titulo-container'>
      {props.texto}{props.emoji}
    </div>
  )
}

export default Titulo
