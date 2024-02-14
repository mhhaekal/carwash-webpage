import Navbar from "../components/Navbar"
import NavbarDekstop from "../components/NavbarDekstop"
import Footer from "../components/Footer"
import Banner from "../components/HomePage/Banner";
import LayananKami from "../components/HomePage/LayananKami";
import ArmadaKami from "../components/HomePage/ArmadaKami";
import Features from "../components/HomePage/Features";
import { FaHourglassHalf } from "react-icons/fa";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FaWalking } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";


const HomePage = () => {
    return (
        <div >
            <Navbar />
            <NavbarDekstop />
            <Banner />
            <LayananKami />
            <ArmadaKami />
            <Features />

            <div className="bg-rose-200 mt-10 -skew-y-3 px-9 lg:px-28 pb-12 lg:pt-3">
                <div className="transform skew-y-3">
                    <div className="pt-10 font-semibold text-xl py-5 lg:text-4xl lg:font-semibold lg:mt-10">OUR BENEFITS
                    </div>

                    <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:pt-10 lg:pb-10">
                        <div className="">
                            <div className="grid place-content-center">
                                <div className="w-[50px] lg:w-[60px] lg:h-[60px] bg-red-700 p-4 rounded-2xl grid place-content-center">
                                    <FaHourglassHalf className="text-white lg:text-2xl" />
                                </div>
                            </div>
                            <div className="pt-3 font-base font-bold lg:font-semibold lg:text-2xl">Practical</div>
                            <div className="font-thin text-sm tracking-wide leading-6 pt-2 lg:text-lg">
                                Kemudahan perawatan & kebersihan kendaraan dalam satu sentuhan! Booking dimana dan kapan saja.
                            </div>
                        </div>
                        <div>
                            <div className="grid place-content-center">
                                <div className="w-[50px] lg:w-[60px] lg:h-[60px] bg-red-700 p-4 rounded-2xl grid place-content-center">
                                    <BsCalendarCheckFill className="text-white lg:text-2xl" />
                                </div>
                            </div>
                            <div className="pt-3 font-base font-bold lg:font-semibold lg:text-2xl">Flexible Schedule</div>
                            <div className="font-thin text-sm tracking-wide leading-6 pt-2 lg:text-lg">
                                Pilih jadwal perawatan mobil sesuai dengan kesibukan & aktivitas Anda.
                            </div>
                        </div>
                        <div>
                            <div className="grid place-content-center">
                                <div className="w-[50px] lg:w-[60px] lg:h-[60px] bg-red-700 p-4 rounded-2xl grid place-content-center">
                                    <FaWalking className="text-white lg:text-2xl" />
                                </div>
                            </div>
                            <div className="pt-3 font-base font-bold lg:font-semibold lg:text-2xl">Well-Trained Crew</div>
                            <div className="font-thin text-sm tracking-wide leading-6 pt-2 lg:text-lg">
                                Tenaga kerja yang terlatih dan terstandarisasi.
                            </div>
                        </div>
                        <div>
                            <div className="grid place-content-center">
                                <div className="w-[50px] lg:w-[60px] lg:h-[60px] bg-red-700 p-4 rounded-2xl grid place-content-center">
                                    <FaGift className="text-white lg:text-2xl" />
                                </div>
                            </div>
                            <div className="pt-3 font-base font-bold lg:font-semibold lg:text-2xl">Fully Equipment
                            </div>
                            <div className="font-thin text-sm tracking-wide leading-6 pt-2 lg:text-lg">
                                Membawa perlengkapan cuci lengkap, seperti mesin jet clenaer, mesin vacuum cleaner, dan peralatan lainnya.
                            </div>
                        </div>
                        <div>
                            <div className="grid place-content-center">
                                <div className="w-[50px] lg:w-[60px] lg:h-[60px] bg-red-700 p-4 rounded-2xl grid place-content-center">
                                    <FaMoneyBillAlt className="text-white lg:text-2xl" />
                                </div>
                            </div>
                            <div className="pt-3 font-base font-bold lg:font-semibold lg:text-2xl">Daily Promotion</div>
                            <div className="font-thin text-sm tracking-wide leading-6 pt-2 lg:text-lg">
                                Nikmati berbagai macam promo dan penawaran menarik pada aplikasi CLINK! setiap harinya.
                            </div>
                        </div>
                        <div>
                            <div className="grid place-content-center">
                                <div className="w-[50px] lg:w-[60px] lg:h-[60px] bg-red-700 p-4 rounded-2xl grid place-content-center">
                                    <FaCoins className="text-white lg:text-2xl" />
                                </div>
                            </div>
                            <div className="pt-3 font-base font-bold lg:font-semibold lg:text-2xl">Reedemable Points</div>
                            <div className="font-thin text-sm tracking-wide leading-6 pt-2 lg:text-lg">
                                (soon) Dapatkan point untuk setiap transaksi yang dapat ditukarkan dengan berbagai penawaran menarik !
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-red-800 to-red-500 -skew-y-3 px-9 lg:px-28 pb-12 lg:pt-3">
                <div className="transform skew-y-3 pt-10 text-white grid place-content-center">
                    <div className="text-xl font-semibold lg:text-5xl pt-3 lg:pt-10">Menghubungkan Konsumen dengan Mitra Cuci Mobil Professional dan Terpercaya</div>
                    <div className="pt-3 lg:pt-8 text-sm lg:text-lg">CLINK! akan terus melebarkan sayap agar dapat melayani Anda lebih dekat, darimanapun dan kapanpun</div>
                    <div className="grid place-content-center">
                        <img src="./Assets/Map.png" alt="" />
                    </div>
                </div>

            </div>


            <Footer />
        </div>
    )
}

export default HomePage