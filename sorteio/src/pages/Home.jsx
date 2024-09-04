import Titulo from '../components/Titulo'
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
      <Titulo texto={'Sorteio'} emoji={'🎲'}/>
      <button onClick={sorteio}>Sortear</button>
    </div>
  )
}

export default Home
