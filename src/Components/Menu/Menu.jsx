import { Platos } from "../../Services/Platos"
const Menu = ({base})=>{
    return(
        <section id="menu" className="scroll-mt-15">
            <div className="flex flex-col px-5 py-15 gap-5 justify-center items-center">
                <h3 className="text-3xl text-center font-bold text-blue-900">La Carta del Océano</h3>
                <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {Platos.map(plato=>(
                        <div key={plato.id} className="px-3 transition-transform hover:scale-105 py-3 gap-5 justify-center items-center flex flex-col rounded-lg shadow shadow-blue-950">
                            <h4 className="text-center font-semibold text-blue-900 text-lg">{plato.titulo}</h4>
                            <img className="rounded-xl w-60" src={`${base}${plato.imagen.substring(1)}`} alt={plato.titulo} />
                            <p className="text-center font-semibold">{plato.descripcion}</p>
                            <p className="font-bold text-blue-950 text-lg">$ {plato.precio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Menu