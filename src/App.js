import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import FruitsImg from './components/FruitsImg'
import MainPage from './components/MainPage'

function App() {
  return (
    <div className='container'>
      <MainPage />
      <Header />
      <FruitsImg />
    </div>
  )
}

export default App
