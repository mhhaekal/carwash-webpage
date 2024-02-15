import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";


const Footer = () => {
    return (
        <div className="mt-10 lg:text-lg">
            <div className="bg-red-700 h-1"></div>

            <div className="my-10 lg:flex lg:justify-between lg:mx-32 lg:h-[300px]">

                <div className="">
                    <div className="lg:flex lg:gap-8 lg:text-left">
                        <div className="grid gap-5 place-content-center mt-5">
                            <div className="w-[102px] lg:w-[190px]">
                                <img src="./Assets/Logo.png" alt="Logo" />
                            </div>
                        </div>

                        <div className="grid gap-5 place-content-center mt-5">
                            <div className="lg:flex lg:flex-col lg:gap-2 flex flex-col gap-5">
                                <div className="font-bold text-lg">Contact Us</div>
                                <div>0817 1717 0090</div>
                                <div>@clink.indonesia</div>
                                <div>indonesia.clink@gmail.com</div>
                                <div className="flex place-content-center lg:place-content-start gap-5">
                                    <a href="https://www.instagram.com/clink.indonesia/" className="text-4xl"><FaInstagram /></a>
                                    <a href="https://api.whatsapp.com/send/?phone=6281717170090&text=Hai+CLINK%21+Saya+mau+tanya" className="text-4xl"><FaWhatsapp /></a>
                                    <a href="https://play.google.com/store/apps/details?id=com.clinkindonesia.clink" className="text-4xl"><IoLogoGooglePlaystore /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="lg:text-left lg:flex pt-10 lg:gap-10 text-xl">

                    <div className="grid place-content-center lg:place-content-start pb-10">
                        <div className="text-lg font-bold">Company</div>
                        <div className="text-gray-400 underline text-sm lg:text-base grid gap-2 pt-2">
                            <div className="hover:no-underline hover:text-black">About Us</div>
                            <div className="hover:no-underline hover:text-black">Keluhan, Kritik, dan Saran</div>
                        </div>
                    </div>

                    <div className="grid place-content-center lg:place-content-start">
                        <div className="text-lg font-bold">Support</div>
                        <div className="text-gray-400 underline text-sm lg:text-base grid gap-2 pt-2">
                            <div className="hover:no-underline hover:text-black">Mitra CLINK!</div>
                            <div className="hover:no-underline hover:text-black">F.A.Q Aplikasi CLINK!</div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-gray-200 text-sm p-5">
                <div>Copyright © 2024 CLINK! Cuci Mobil Keliling</div>
                <div>Powered by CLINK! Cuci Mobil Keliling</div>
            </div>
        </div>
    )
}
export default Footer