const Banner = ()=>{
    return(
        <section id="banner" className="pt-17" >
            <div className="bg-[url(/portada.webp)] bg-cover bg-center flex  justify-center items-center h-95 lg:h-145 w-full">
                <div className=" py-5 gap-5 rounded-2xl bg-black/50 w-95 lg:w-200 flex flex-col justify-center items-center">
                    <h2 className="font-bold text-2xl lg:text-7xl text-white">El Ancla Dorada</h2>
                    <p className="text-white text-2xl text-center">Donde el Océano se Convierte en Arte Culinario.</p>
                    <a href="#reservas" className="cursor-pointer transition-transform hover:scale-110 border border-white bg-blue-950 text-white px-3 lg:px-10 py-1 lg:py-2 rounded">Reserva Aqui</a>
                </div>
            </div>
        </section>
    )
}

export default Banner