import { useState } from "react"
import { FiMenu } from "react-icons/fi";
const Header = ()=>{
    const [estado,setEstado] = useState(false)
    const despliegue = ()=>{
        setEstado(!estado)
    }
    return(
        <header id="cabecera" className="fixed z-50 w-full text-white bg-blue-950">
            <div className="container mx-auto flex justify-between p-5 items-center">
                <h1 className="font-bold text-xl lg:text-3xl">El ancla dorada</h1>
                <nav className="hidden lg:flex lg:space-x-5">
                    <a  href="#banner">Inicio</a>
                    <a  href="#nosotros">Nosotros</a>
                    <a  href="#menu">Menu</a>
                    <a  href="#bebidas">Bebidas</a>
                    <a  href="#reservas">Reservar</a>
                </nav>
                <button onClick={()=>despliegue()} className="border lg:hidden rounded cursor-pointer border-white px-2 py-1"><FiMenu /></button>
            </div>
            {estado && 
                <nav className="flex gap-4 py-2 relative z-50 flex-col justify-center items-center">
                    <a onClick={()=>despliegue()} href="#banner">Inicio</a>
                    <a onClick={()=>despliegue()} href="#nosotros">Nosotros</a>
                    <a onClick={()=>despliegue()} href="#menu">Menu</a>
                    <a onClick={()=>despliegue()} href="#bebidas">Bebidas</a>
                    <a onClick={()=>despliegue()} href="#reservas">Reservar</a>
                </nav> 
            }
        </header>
    )
}
export default Header