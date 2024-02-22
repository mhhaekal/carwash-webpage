import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const Kemitraan = () => {
    return (
        <div className="flex flex-col justify-start pt-12 lg:pt-20 text-left px-8 lg:px-32">
            <div className="text-red-800 text-sm tracking-widest font-semibold lg:text-base">KEMITRAAN MINI CLINK</div>
            <div className="flex gap-2 pt-8 pb-3 text-sm lg:text-base">
                <div className="flex transition ease-in-out delay-150 text-black hover:scale-95 hover:text-red-800 duration-100 gap-2">
                    <div className="font-semibold">Learn More</div>
                    <div className="grid place-content-center"><FaLongArrowAltRight /></div>
                </div>

            </div>
            <div className=" text-xl font-bold pb-1 lg:text-4xl tracking-wider">Bergabunglah dengan CLINK!</div>
            <div className="font-thin text-sm tracking-wide leading-6 lg:text-lg lg:pt-3">
                Mari bergabung untuk menjadi mitra CLINK!. Seluruh mitra akan dilatih untuk menjadi tenaga cuci mobil professional dan terstandarisasi.
            </div>

            <div className="pt-4 flex flex-col gap-3">
                <div className="flex gap-3">
                    <div className="grid place-content-center lg:text-lg">
                        <FaCheckCircle className="text-red-700 text-md" />
                    </div>
                    <div className="text-sm font-semibold lg:text-lg">Diberikan pelatihan cuci mobil professional
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="grid place-content-center lg:text-lg">
                        <FaCheckCircle className="text-red-700 text-md" />
                    </div>
                    <div className="text-sm font-semibold lg:text-lg">Diberikan pinjaman peralatan cuci mobil terstandarisasi & lengkap
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="grid place-content-center lg:text-lg">
                        <FaCheckCircle className="text-red-700 text-md" />
                    </div>
                    <div className="text-sm font-semibold lg:text-lg">Menggunakan armada MINI CLINK!
                    </div>
                </div>
            </div>
            <div className="mt-8 btn lg:btn-lg w-full lg:w-[400px] mb-3 hover:bg-white hover:border-2 hover:scale-90 hover:border-white hover:text-red-700 text-white shadow-xl bg-red-700">Daftar Kemitraan</div>
        </div>
    )
}

export default Kemitraan