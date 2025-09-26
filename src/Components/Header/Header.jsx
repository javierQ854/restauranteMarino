import { useState } from "react"
const Header = ()=>{
    const [estado,setEstado] = useState(false)
    const despliegue = ()=>{
        setEstado(!estado)
    }
    return(
        <header id="cabecera" className="absolute w-full text-white bg-blue-950">
            <div className="container mx-auto flex justify-between p-5 items-center">
                <h1 className="font-bold text-xl lg:text-3xl">Olas del mar</h1>
                <nav className="hidden lg:flex lg:space-x-5">
                    <a onClick={()=>validacion()} href="">Inicio</a>
                    <a onClick={()=>validacion()} href="">Nosotros</a>
                    <a onClick={()=>validacion()} href="">Menu</a>
                    <a onClick={()=>validacion()} href="">Bebidas</a>
                    <a onClick={()=>validacion()} href="">Personal</a>
                    <a onClick={()=>validacion()} href="">Contactanos</a>
                </nav>
                <button onClick={()=>despliegue()} className="border cursor-pointer border-white px-2 py-1">Desplegar</button>
            </div>
            {estado && 
                <nav className="flex gap-4 py-2 relative z-50 flex-col justify-center items-center">
                    <a href="">Inicio</a>
                    <a href="">Nosotros</a>
                    <a href="">Menu</a>
                    <a href="">Bebidas</a>
                    <a href="">Personal</a>
                    <a href="">Contactanos</a>
                </nav> 
            }
            
            
        </header>
    )
}
export default Header