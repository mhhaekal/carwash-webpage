import aboutus from '../aboutus_clink.jpg';
import bg from '../bg_clink.jpg';
import { IoPlayCircleOutline } from "react-icons/io5";
const AboutUs = () => {
    return (
        <div className="bg-red-600">
            <div className="mt-[70px] flex flex-col md:flex-row">
                <div className="text-white w-full md:w-1/2 text-center md:text-left md:m-20">
                    <h2 className="text-white md:text-6xl text-4xl">
                        CLINK! <br /> Cuci Mobil Home Service
                    </h2>
                    <p className="pt-5">
                        <span>
                            CLINK! merupakan Start-Up yang bergerak dibidang layanan kebersihan home service. Pada tahun 2019, CLINK! didirikan dengan inspirasi yang berasal dari keterbatasan waktu para pemilik mobil untuk merawat kendaraannya di tengah kesibukannya.
                        </span>
                    </p>
                    <p className="pt-5">
                        <span>
                            Kami hadir menjadi solusi bagi pemilik mobil untuk mempercayakan kebersihan kendaraannya kepada CLINK! dengan tenaga professional yang terlatih dan terpercaya, tanpa perlu menghabiskan waktu.
                        </span>
                    </p>
                    <p className="pt-5">
                        <span>
                            Melalui aplikasi, konsumen cukup meluangkan 1 menit untuk melakukan penjadwalan cuci mobil ke rumah, menyesuaikan dengan jadwal aktivitas dan kesibukan masing-masing konsumen.
                        </span>
                    </p>
                    <p className="pt-5">
                        <span>
                            CLINK! akan terus berinovasi untuk menghadirkan layanan yang relevan dan sustainable bagi masyarakat.
                        </span>
                    </p>
                </div>
                <div className="pt-5 w-full md:w-1/2 md:m-20">
                    <img src={aboutus} alt="CLINK! Home Service" className="w-full" />
                </div>
            </div >
            <div className="relative mb-5">
                <img src={bg} alt="" style={{ filter: 'grayscale(70%)' }}
                    className="w-full h-full object-cover group-hover:filter-none" />
                <a
                    href="https://www.youtube.com/watch?v=Uftq40EVXGI&feature=youtu.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <IoPlayCircleOutline size={100} className="text-white cursor-pointer" />
                </a>
            </div>
        </div>
    )
}
export default AboutUs