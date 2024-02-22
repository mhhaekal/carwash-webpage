import React from "react";
import "../index.css";
import { FaUser, FaMotorcycle, FaPenNib } from "react-icons/fa";

const SyaratKemitraan = () => {
  return (
    <div className="h-[220px] sm:h-[350px] md:h-[400px] lg:h-[700px] font-montserrat pt-[25px] sm:pt-[30px] md:pt-[40px] mt-[15px]">
      <div class="triangle_top_left"></div>
      <div className="max-w-[350px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1050px] mx-auto mt-[10px]">
        <div className="text-center">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl">SYARAT KEMITRAAN</p>
          <p className="text-sm md:text-[16px] font-light mt-[20px]">
            Siapa saja dapat bergabung dengan kemitraan CLINK!
          </p>
          <p className="text-sm md:text-[16px] font-light mt-[10px]">
            Gabung sekarang,dan dapatkan banyak keuntungan !
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-[50px] gap-2">
          <div className="">
            <div className="h-[50px] w-[50px] bg-red-700 rounded-xl flex justify-center items-center">
              <FaUser size={25} className="text-white" />
            </div>
            <p className="font-semibold text-lg md:text-xl mt-[20px]">Administratif</p>
            <p className="mt-[30px]">- Pria</p>
            <p className="mt-[20px]">- Maksimal usia 55 tahun</p>
            <p className="mt-[20px]">- E-KTP</p>
            <p className="mt-[20px]">- SIM C(masih belaku)</p>
            <p className="mt-[20px]">- STNK Asli (masih berlaku)</p>
            <p className="mt-[20px]">- SKCK Asli / Legalisir (aktif)</p>
            <p className="mt-[20px]">- Fotocopy Kartu</p>
            <p className="mt-[20px]">- Buku Rekening Tabungan</p>
          </div>
          <div className="">
            <div className="h-[50px] w-[50px] bg-red-700 rounded-xl flex justify-center items-center">
              <FaMotorcycle size={25} className="text-white" />
            </div>
            <p className="font-semibold text-lg md:text-xl mt-[20px]">Perlengkapan Usaha</p>
            <p className="mt-[30px]">- Memiliki motor roda 2</p>
            <p className="mt-[20px]">- Memiliki smartphone Android</p>
            <p className="mt-[20px]">
              - Batas maksimal umur kendaraan 8 tahun (dihitung dari tahun pendaftaran)
            </p>
            <p className="mt-[20px]">- Maksimal kapasitas mesin 250 cc (tidak boleh leibh)</p>
            <p className="mt-[20px]">
              - Bukan kendaraan motor tipe Trail & Sport (untuk kemudahan membawa peralatan usaha)
            </p>
            <p className="mt-[20px]">
              - Memiliki peralatan & perlengkapan cuci merupakan nilai tambah
            </p>
          </div>
          <div className="md:pl-5">
            <div className="h-[50px] w-[50px] bg-red-700 rounded-lg flex justify-center items-center">
              <FaPenNib size={25} className="text-white" />
            </div>
            <p className="font-semibold text-lg md:text-xl mt-[20px]">Pengetahuan & Kemampuan</p>
            <p className="mt-[30px]">- Jujur & bertanggung jawab</p>
            <p className="mt-[20px]">- Kemampuan dasar cuci mobil</p>
            <p className="mt-[20px]">- Kemampuan dasar otomotif</p>
            <p className="mt-[20px]">
              - Kemampuan dasar menggunakan smartphone (untuk Aplikasi CLINK)
            </p>
            <p className="mt-[20px]">- Kemampuan berkomunikasi dengan baik</p>
            <p className="mt-[20px]">- Kemampuan pengaturan waktu dengan baik</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyaratKemitraan;
