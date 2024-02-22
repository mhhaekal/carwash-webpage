import { FaHourglassHalf } from "react-icons/fa";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FaWalking } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";

const Benefits = () => {
    return (
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
    )
}

export default Benefits