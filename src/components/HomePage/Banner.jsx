const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-red-800 to-red-500 lg:h-[780px] px-10 lg:px-20 lg:pt-10 mt-16 lg:mt-0">
            <div className="flex justify-center lg:justify-around">
                <div className="text-white text-left w-36 lg:w-[500px] lg:pt-10 mt-10 lg:mt-0">
                    <div className=" text-5xl lg:text-7xl pb-3 lg:pb-0 font-bold lg:font-bold">CLINK!</div>
                    <div className="text-xl lg:text-6xl font-semibold mb-5 lg:pt-5">Cuci Mobil Home Service</div>
                    <div className="text-xs lg:text-xl pb-3 lg:pt-10">
                        <div className="pb-3 lg:pb-1">Aplikasi Cuci Mobil Home Service</div>
                        <div className="pb-3 lg:pb-1">Pesan Sekarang di Aplikasi CLINK!Cuci Mobil Keliling</div>
                        <div>#PanggilCLINKAja!</div>
                    </div>
                </div>
                <div className="pt-28 lg:pt-0 relative flex">
                    <img src="./Assets/Phone.png" className="mt-8 lg:mt-0 w-58 h-40 lg:h-auto lg:w-[550px]" alt="Phone" />
                    <img src="./Assets/Logo.png" className="lg:w-[200px] w-[60px] absolute lg:bottom-20 bottom-3 rounded-full border-2 lg:border-4 border-white" alt="Logo" />
                </div>
            </div>

            <div className="lg:flex justify-center gap-10 w-auto pb-8 pt-5">
                <div className="btn lg:btn-lg w-full lg:w-[570px] mb-3 hover:bg-red-700 hover:border-2 hover:scale-90 hover:border-white hover:text-white text-red-700 bg-white">Booking Melalui Apps</div>
                <div className="btn lg:btn-lg w-full lg:w-[570px] hover:bg-red-700 hover:border-2 hover:scale-90 hover:border-white hover:text-white text-red-700 bg-white">Booking Melalui WhatsApp</div>
            </div>
        </div>
    )
}


export default Banner