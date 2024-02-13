import Navbar from "../components/Navbar"
import NavbarDekstop from "../components/NavbarDekstop"
import Footer from "../components/Footer"

const HomePage = () => {
    return (
        <div >
            <div>
                <Navbar />
            </div>

            <div>
                <NavbarDekstop />
            </div>

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
                        <img src="./Assets/Phone.png" className="mt-8 lg:mt-0 w-58 h-40 lg:h-auto lg:w-[550px]" />
                        <img src="./Assets/Logo.png" className="lg:w-[200px] w-[60px] absolute lg:bottom-20 bottom-3 rounded-full border-2 lg:border-4 border-white" />
                    </div>
                </div>

                <div className="lg:flex justify-center gap-10 w-auto pb-8 pt-5">
                    <div className="btn lg:btn-lg w-full lg:w-[570px] mb-3 hover:bg-red-700 hover:border-2 hover:scale-90 hover:border-white hover:text-white text-red-700">Booking Melalui Apps</div>
                    <div className="btn lg:btn-lg w-full lg:w-[570px] hover:bg-red-700 hover:border-2 hover:scale-90 hover:border-white hover:text-white text-red-700">Booking Melalui WhatsApp</div>
                </div>

            </div>

            <div className="px-5">
                <div className="font-bold text-xl py-5 lg:text-4xl lg:font-semibold lg:mt-10">LAYANAN KAMI</div>
                <div className=" lg:flex lg:place-content-center pt-3 gap-8">
                    <div className=" grid place-content-center gap-3 mb-10 lg:mb-0">
                        <div className="grid place-content-center">
                            <div className="w-[150px] lg:w-[180px] pt-1"><img src="./Assets/RegularWash.png" alt="Regular Wash" /></div>
                        </div>
                        <div className="font-bold lg:text-xl lg:font-semibold">Regular Wash</div>
                        <div className="text-sm lg:text-base font-thin lg:font-extralight w-[320px] lg:w-[380px] leading-relaxed"> Layanan cuci mobil reguler, berupa cuci eksterior, vakum interior, dan semir ban. Menjadikan mobil bersih luar dalam dan lebih nyaman digunakan.</div>
                    </div>

                    <div className=" grid place-content-center gap-3 mb-10 lg:mb-0">
                        <div className="grid place-content-center">
                            <div className="w-[150px] lg:w-[180px]"><img src="./Assets/HandWax.png" alt="Regular Wash" /></div>
                        </div>
                        <div className="font-bold lg:text-xl lg:font-semibold">Hand Wax</div>
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
                    <div className=" grid place-content-center gap-3 mb-10 lg:mb-0">
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

            <div><Footer /></div>

        </div>
    )
}

export default HomePage