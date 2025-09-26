import { Cocteles } from "../../Services/Bebidas"
const Bebidas =({base})=>{
    return(
        <section id="bebidas" className="scroll-mt-15">
            <div className="gap-5 px-5 bg-blue-950/10 py-15 flex flex-col justify-center items-center">
            <h3 className="text-3xl text-center font-bold text-blue-900">Bodega y Coctelería</h3>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {Cocteles.map(coctel=>(
                        <div key={coctel.id} className="px-3 transition-transform hover:scale-105 bg-white py-3 gap-5 justify-center items-center flex flex-col rounded-lg shadow shadow-blue-950">
                            <h4 className="text-center font-semibold text-blue-900 text-lg">{coctel.titulo}</h4>
                            <img className="rounded-xl w-60" src={`${base}${coctel.imagen.substring(1)}`} alt={coctel.titulo} />
                            <p className="text-center font-semibold">{coctel.descripcion}</p>
                            <p className="font-bold text-blue-950 text-lg">$ {coctel.precio}</p>
                        </div>
                    ))}
                </div>
            </div> 
            
        </section>
    )
}

export default Bebidas