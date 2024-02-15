import { FaCheckCircle } from "react-icons/fa";


const Features = () => {
    return (
        <div className="mx-8 lg:mt-10 lg:grid lg:place-content-center">

            <div className="lg:flex">
                <div className="grid place-content-center">
                    <div className="mt-20 relative w-48 lg:w-[500px]">
                        <img src="./Assets/OnlineBooking.png" className="z-10" alt="Online Booking" />
                        <div className="bg-gradient-to-r from-red-800 to-red-500 absolute lg:rounded-l-xl rounded-l-lg left-5 lg:left-14 bottom-4 lg:bottom-10 w-[30px] lg:w-[74px] h-[155px] lg:h-[420px]"></div>
                        <div className="bg-gradient-to-l from-stone-200 to-stone-100 absolute lg:rounded-r-xl rounded-r-lg right-5 lg:right-14 bottom-6 lg:bottom-20 w-[30px] lg:w-[74px] h-[125px] lg:h-[243px]"></div>
                    </div>
                </div>

                <div className="lg:pt-10 lg:w-[540px] lg:ml-20 lg:mt-20">
                    <div className="grid place-content-center pt-3 text-md text-red-700 font-semibold tracking-widest lg:text-left lg:place-content-start">ONLINE BOOKING</div>

                    <div className="text-left mt-5 text-lg lg:text-2xl font-semibold">Booking Dimana & Kapan Saja</div>
                    <div className="text-left text-sm lg:text-base tracking-wide leading-6 font-thin lg:pt-5">Booking cuci mobil lebih mudah & cepat dengan Aplikasi CLINK!. Nikmati berbagai pilihan jadwal dan layanan yang sudah terstandarisasi dengan membawa peralatan cuci sendiri.</div>

                    <div className="pt-4 flex flex-col gap-3">
                        <div className="flex gap-3">
                            <div className="grid place-content-center lg:text-lg">
                                <FaCheckCircle className="text-red-700 text-md" />
                            </div>
                            <div className="text-sm font-semibold lg:text-lg">Flexible Schedule</div>
                        </div>
                        <div className="flex gap-3">
                            <div className="grid place-content-center lg:text-lg">
                                <FaCheckCircle className="text-red-700 text-md" />
                            </div>
                            <div className="text-sm font-semibold lg:text-lg">Well Trained Crew</div>
                        </div>
                        <div className="flex gap-3">
                            <div className="grid place-content-center lg:text-lg">
                                <FaCheckCircle className="text-red-700 text-md" />
                            </div>
                            <div className="text-sm font-semibold lg:text-lg">Fully Equipment</div>
                        </div>

                    </div>

                    <div className="flex justify-start gap-3 pt-5">
                        <div className="btn btn-sm lg:btn lg:shadow-xl lg:text-lg lg:bg-white lg:text-red-700 w-[170px] lg:w-[270px] mb-3 hover:bg-red-700 hover:border-2 hover:scale-90 hover:border-white hover:text-white text-red-700 text-xs shadow-xl bg-white">Booking Via Whatsapp</div>
                        <div className="btn btn-sm lg:btn lg:shadow-xl lg:text-lg lg:w-[250px] lg:bg-white lg:text-red-700 w-auto mb-3 hover:bg-red-700 hover:border-2 hover:scale-90 hover:border-white hover:text-white text-red-700 text-xs bg-white shadow-xl">Booking Via App</div>

                    </div>

                </div>
            </div>


            <div className="lg:flex">
                <div className="grid place-content-center">
                    <div className="mt-20 relative w-48 lg:w-[500px]">
                        <img src="./Assets/Review&Rating.png" className="z-10" alt="Review&Rating" />
                        <div className="bg-gradient-to-r from-stone-200 to-stone-100 absolute lg:rounded-l-xl rounded-l-lg left-1 lg:left-3 bottom-7 lg:bottom-24 w-[46px] lg:w-[117px] h-[129px] lg:h-[300px]"></div>
                        <div className="bg-gradient-to-l from-red-800 to-red-500 absolute lg:rounded-r-xl rounded-r-lg right-1 lg:right-3 bottom-5 lg:bottom-16 w-[46px] lg:w-[118px] h-[150px] lg:h-[390px]"></div>
                    </div>
                </div>

                <div className="lg:pt-10 lg:w-[540px] lg:ml-20 lg:mt-20">
                    <div className="grid place-content-center pt-3 text-md text-red-700 font-semibold tracking-widest lg:text-left lg:place-content-start">REVIEW & RATING
                    </div>

                    <div className="text-left mt-5 text-lg lg:text-2xl font-semibold">Booking Dimana & Kapan Saja</div>
                    <div className="text-left text-sm lg:text-base tracking-wide leading-6 font-thin lg:pt-5">Berikan penilaian & ulasan kualitas layanan kami. Dapatkan point dan tukarkan dengan berbagai penawaran menarik!</div>

                    <div className="pt-4 flex flex-col gap-3 pb-5">
                        <div className="flex gap-3">
                            <div className="grid place-content-center lg:text-lg">
                                <FaCheckCircle className="text-red-700 text-md" />
                            </div>
                            <div className="text-sm font-semibold lg:text-lg">Review & Rating</div>
                        </div>
                        <div className="flex gap-3">
                            <div className="grid place-content-center lg:text-lg">
                                <FaCheckCircle className="text-red-700 text-md" />
                            </div>
                            <div className="text-sm font-semibold lg:text-lg">Add a Photo / Video Review</div>
                        </div>
                        <div className="flex gap-3">
                            <div className="grid place-content-center lg:text-lg">
                                <FaCheckCircle className="text-red-700 text-md" />
                            </div>
                            <div className="text-sm font-semibold lg:text-lg">Extra bonus redeemable points (soon)</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features