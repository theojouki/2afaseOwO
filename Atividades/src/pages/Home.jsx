import Titulo from '../components/Titulo'
import './Home.css'

function Home() {
    function Converter() {
        let celsius, fahrenheit
        let medida = Number(prompt('Para qual medida você gostaria de converter?\n1 - Celsius\n2- Fahrenheit'))

        switch(medida){
        case 1:
        fahrenheit = Number(prompt('Digite quantos graus deseja converter:'))
        celsius = (fahrenheit - 32) / 1.8
        alert(`${fahrenheit} graus Fahrenheit convertido para Celsius fica ${celsius} graus Celsius`)
        break
        
        case 2:
        celsius = Number(prompt('Digite quantos graus deseja converter:'))
        fahrenheit = celsius * 1.8 + 32
        alert(`${celsius} graus Celsius convertido para Fahrenheit fica ${fahrenheit} graus Fahrenheit`)
        break

        default:
        alert('Erro.')
        }
    }
    function Democracia() {
        let idadePresidente1 = Number(prompt('Digite a idade do presidente da chapa 1:'))
        let idadeVice1 = Number(prompt('Digite a idade do vice-presidente da chapa 1:'))
        let idadePresidente2 = Number(prompt('Digite a idade do presidente da chapa 2:'))
        let idadeVice2 = Number(prompt('Digite a idade do vice-presidente da chapa 2:'))
        let experiencia1 = idadePresidente1 + idadeVice1
        let experiencia2 = idadePresidente2 + idadeVice2
        
        if(experiencia1 > experiencia2){
            alert('A chapa 1 possui mais experiência')
        }else if(experiencia1 < experiencia2){
            alert('A chapa 2 possui mais experiência')
        }else{
            alert('Ambas chapas possuem a mesma experiência')
        }
    }
    function Numero(){
        let numero1 = Number(prompt('Digite um número:'))

        if(numero1 > 0){
            alert('O número é positivo')
        }else if(numero1 < 0){
            alert('O número é negativo')
        }else{
            alert('O número é nulo')
        }
    }
    function Copo(){
        let numero2 = Number(prompt('Digite um número:'))

        if(numero2 > 0 && numero2 % 2 == 0){
            alert('O número é positivo e par')
        }else{
            alert('O número não é positivo e par')
        }
    }
    function Garcom(){
        let salario = Number(prompt('Digite o valor do salário:'))
        let emprestimo = Number(prompt('Digite o valor do empréstimo:'))
        let prestacoes = Number(prompt('Digite a quantidade de prestações:'))

        if(emprestimo <= salario * 0.3 && salario > 0 && emprestimo > 0 && prestacoes > 0){
            alert('O empréstimo pode ser concedido')
        }else{
            alert('O empréstimo não pode ser concedido')
        }
    }
  return (
    <div className='home-container'>
      <Titulo texto={'Exercícios'}emoji={'😊'}/>
      <button className='button-div' onClick={Converter}>Exercício 5.27</button>
      <button className='button-div' onClick={Democracia}>Exercício 5.28</button>
      <button className='button-div' onClick={Numero}>Exercício 5.29</button>
      <button className='button-div' onClick={Copo}>Exercício 5.30</button>
      <button className='button-div' onClick={Garcom}>Exercício 5.31</button>
    </div>
  )
}

export default Home
