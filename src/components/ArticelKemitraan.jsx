import React from "react";
import { FaMotorcycle, FaToolbox, FaUser } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const ArticelKemitraan = () => {
  return (
    <div className="max-w-[350px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[930px] mx-auto  bottom-4 font-montserrat py-[35px]">
      <div className="text-center text-[13px] md:text-[17px]">
        <p>Anda sudah memiliki perlengkapan cuci sendiri?</p>
        <p>Anda memiliki kemampuan dalam perawatan & kebersihan mobil?</p>
        <p>Memiliki skill & pengalaman, namun kesulitan mencari pesanan?</p>
        <p className="mt-[20px]">Gabung sekarang bersama Mitra CLINK!</p>
      </div>
      <div className="text-center mt-[40px]">
        <h1 className="font-semibold text-[20px] md:text-[34px]">Kelebihan Mitra CLINK!</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 mt-[20px] md:px-[60px]">
        <div className="flex flex-col items-center md:items-start">
          <div className="h-[50px] w-[50px] bg-red-700 rounded-md flex justify-center items-center">
            <FaMotorcycle size={25} className="text-white" />
          </div>
          <p className="text-[16px] md:text-[24px] font-semibold mt-[10px] md:w-[250px] lg:w-[350px]">
            Pelatihan Professional
          </p>
          <p className="md:w-[250px] lg:w-full text-gray-400 text-[16px] mt-[10px] text-center md:text-start">
            Mitra diberikan pelatihan cuci mobil secara professional dengan SOP terstandarisasi.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="h-[50px] w-[50px] bg-red-700 rounded-md flex justify-center items-center">
            <FaMoneyCheckDollar size={25} className="text-white" />
          </div>
          <p className="text-[16px] md:text-[24px] font-semibold mt-[10px] md:w-[250px] lg:w-[350px]">
            Tanpa Biaya Pendaftaran
          </p>
          <p className="md:w-[250px] lg:w-[400px] text-gray-400 text-[16px] mt-[10px] text-center md:text-start">
            Bebas biaya pendaftaran.
          </p>
          <p className="md:w-[250px] lg:w-[400px] text-gray-400 text-[16px] text-center md:text-start">
            Kami menerapkan biaya bagi hasil per layanan.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="h-[50px] w-[50px] bg-red-700 rounded-md flex justify-center items-center">
            <FaToolbox size={25} className="text-white" />
          </div>
          <p className="text-[16px] md:text-[24px] font-semibold mt-[10px] md:w-[250px] lg:w-[350px]">
            Peralatan Lengkap
          </p>
          <p className="md:w-[250px] lg:w-full text-gray-400 text-[16px] mt-[10px] text-center md:text-start">
            Mitra diberikan pinjaman peralatan cuci mobil terstandarisasi & lengkap.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start ">
          <div className="h-[50px] w-[50px] bg-red-700 rounded-md flex justify-center items-center">
            <FaUser size={25} className="text-white" />
          </div>
          <p className="text-[16px] md:text-[24px] font-semibold mt-[10px] md:w-[250px] lg:w-[350px]">
            Aplikasi Merchant CLINK!
          </p>
          <p className="md:w-[250px] lg:w-full text-gray-400 text-[16px] mt-[10px] text-center md:text-start">
            Menggunakan aplikasi khusus mitra untuk mendapatkan penjadwalan tersusun rapi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticelKemitraan;
