const Reservas = ()=>{ 
    return(
        <section id="reservas" className="scroll-mt-10">
            <div className="py-15 justify-center items-center gap-5 px-5 flex flex-col">
                <h3 className="text-3xl text-center font-bold text-blue-900">Reserve su experiencia</h3>
                <form action="" className="border w-full lg:w-lg border-blue-950 p-5 flex flex-col gap-5 rounded-xl">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nombre">Nombre</label>
                        <input className="outline-none focus:border-b-blue-900 border rounded text-blue-950 border-blue-950 px-3 py-1" id="nombre" type="text" placeholder="Nombre" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input className="outline-none focus:border-b-blue-900 border rounded text-blue-950 border-blue-950 px-3 py-1" id="email" type="text" placeholder="ej: ejemplo@gmail.com" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="fecha">Fecha</label>
                            <input className="outline-none focus:border-b-blue-900 border rounded text-blue-950 border-blue-950 px-3 py-1" id="fecha" type="date" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="hora">Hora</label>
                            <input className="outline-none focus:border-b-blue-900 border rounded text-blue-950 border-blue-950 px-3 py-1" id="hora" type="time" placeholder="Nombre" />
                        </div> 
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="nombre">Numero de comensales</label>
                        <input className="outline-none focus:border-b-blue-900 border rounded text-blue-950 border-blue-950 px-3 py-1" id="nombre" type="number" placeholder="0" />
                    </div>
                    <button className="bg-blue-950 py-2 border transition-transform hover:scale-105 cursor-pointer border-white rounded text-white">Reservar</button>
                    
                </form>
            </div>
            
        </section>
    )
}
export default Reservas