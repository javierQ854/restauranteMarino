import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner/Banner'
import Nosotros from './Components/Nosotros/Nosotros'
import Menu from './Components/Menu/Menu'
import Bebidas from './Components/Bebidas/Bebidas'
import Reservas from './Components/Reservas'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)
  const BASE_URL = import.meta.env.BASE_URL;
  return (
    <>
    <Header/>
    <Banner/>
    <Nosotros/>
    <Menu base={BASE_URL}/>
    <Bebidas base={BASE_URL}/>
    <Reservas/>
    <Footer/>
    </>
  )
}

export default App
