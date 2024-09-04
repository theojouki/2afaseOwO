import Titulo from '../components/Titulo'
import './Cadastro.css'

function Cadastro() {
  return (
    <div className='cadastro-container'>
        <Titulo texto={'Twenty One Pilots'} emoji={'🎶'}/>
     <h2>Informações das Músicas</h2>
     <label>Digite a música</label>
     <input type="text"/>
     <button onClick={lyrics}>Mostrar Letra</button>
    </div>
  )
}

export default Cadastro
