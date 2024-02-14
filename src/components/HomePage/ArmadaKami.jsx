const ArmadaKami = () => {
    return (
        <div className="px-5 lg:px-28">
            <div className="font-bold text-xl py-5 lg:text-4xl lg:font-semibold lg:mt-10">ARMADA KAMI</div>
            <div className=" lg:flex lg:place-content-center pt-3 gap-8">
                <div className=" grid place-content-center gap-3 mb-10 lg:mb-0">
                    <div className="grid place-content-center">
                        <div className="w-full pt-1"><img src="./Assets/MiniUnit.jpg" alt="MINI CLINK" /></div>
                    </div>
                    <div className="font-bold text-xl lg:text-2xl lg:font-semibold">MINI CLINK
                    </div>
                    <div className="flex justify-center">
                        <div className="text-sm lg:text-base font-thin lg:font-extralight w-[320px] lg:w-[510px] leading-relaxed"> Layanan MINI CLINK menggunakan armada motor roda 2 yang sudah dilengkapi peralatan cuci mobil seperti mesin jet cleaner, vacuum cleaner, dan peralatan lainnya. Ukuran MINI CLINK yang sangat compact membuat layanan lebih mudah dijangkau dan flexible ke manapun.</div>
                    </div>
                </div>
                <div className=" grid place-content-center gap-3 lg:mb-0">
                    <div className="grid place-content-center">
                        <div className="w-full pt-1"><img src="./Assets/MaxiUnit.jpg" alt="MAXI CLINK" /></div>
                    </div>
                    <div className="font-bold text-xl lg:text-2xl lg:font-semibold">MINI CLINK
                    </div>
                    <div className="flex justify-center">
                        <div className="text-sm lg:text-base font-thin lg:font-extralight w-[320px] lg:w-[510px] lg:pb-6 leading-relaxed">Layanan MAXI CLINK menggunakan motor roda 3 yang mampu membawa semua peralatan lengkap, ditambah sumber air dan listrik sebagai keunggulannya. Layanan ini bisa ditemukan di area terbatas.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArmadaKami