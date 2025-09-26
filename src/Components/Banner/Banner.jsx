const Banner = ()=>{
    return(
        <section id="banner" className="pt-18" >
            <div className="bg-red-500 flex  justify-center items-center h-95 w-full">
                <div className=" py-5 gap-5 rounded-2xl bg-black/20 w-95 flex flex-col justify-center items-center">
                    <h2 className="font-bold text-2xl">El mejor pecao</h2>
                    <p>Unete para comer el mejor pecao</p>
                    <button className="cursor-pointer transition-transform hover:scale-110 border border-white bg-blue-950 text-white px-3 py-1 rounded">Reserva Aqui</button>
                </div>
            </div>
            
            
        </section>
    )
}

export default Banner