import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner/Banner'
import Nosotros from './Components/Nosotros/Nosotros'
import Menu from './Components/Menu/Menu'
import Bebidas from './Components/Bebidas/Bebidas'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Banner/>
    <Nosotros/>
    <Menu/>
    <Bebidas/>
    </>
  )
}

export default App
