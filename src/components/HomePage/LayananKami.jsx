const LayananKami = () => {
    return (
        <div className="px-5">
            <div className="font-semibold text-xl py-5 lg:text-4xl lg:mt-10">LAYANAN KAMI</div>
            <div className=" lg:flex lg:place-content-center pt-3 gap-8">
                <div className=" grid place-content-center gap-3 mb-10 lg:mb-0">
                    <div className="grid place-content-center">
                        <div className="w-[150px] lg:w-[180px] pt-1"><img src="./Assets/RegularWash.png" alt="Regular Wash" /></div>
                    </div>
                    <div className="font-semibold lg:text-xl">Regular Wash</div>
                    <div className="text-sm lg:text-base font-thin lg:font-extralight w-[320px] lg:w-[380px] leading-relaxed"> Layanan cuci mobil reguler, berupa cuci eksterior, vakum interior, dan semir ban. Menjadikan mobil bersih luar dalam dan lebih nyaman digunakan.</div>
                </div>

                <div className=" grid place-content-center gap-3 mb-10 lg:mb-0">
                    <div className="grid place-content-center">
                        <div className="w-[150px] lg:w-[180px]"><img src="./Assets/HandWax.png" alt="Regular Wash" /></div>
                    </div>
                    <div className="font-semibold lg:text-xl">Hand Wax</div>
                    <div className="text-sm lg:text-base font-thin lg:font-extralight w-[320px] lg:w-[380px] leading-relaxed"> Layanan semi – coating yang menjadikan kendaraan Anda bersih, mengkilap, dan memberikan efek hydro-phobic. Debu & kotoran jadi tidak mudah menempel.</div>
                </div>

                <div className=" grid place-content-center gap-3 mb-10 lg:mb-0 lg:pt-5">
                    <div className="grid place-content-center">
                        <div className="w-[150px] lg:w-[180px]"><img src="./Assets/CarFogging.png" alt="Regular Wash" /></div>
                    </div>
                    <div className="font-bold lg:text-xl lg:font-semibold">Car Fogging</div>
                    <div className="text-sm lg:text-base font-thin lg:font-extralight w-[320px] lg:w-[350px] leading-relaxed"> Layanan car fogging berguna untuk membunuh virus & bakteri di dalam mobil. Fogging juga ampuh untuk membunuh serangga dan menghilangkan bau tidak sedap.</div>
                </div>
            </div>
        </div>
    )
}

export default LayananKami