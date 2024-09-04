import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
       <Cadastro/>
      </div>
    </>
  )
}

export default App
