import React from "react";

const HpKemitraan = () => {
  return (
    <div className="h-[220px] sm:h-[350px] md:h-[400px] lg:h-[550px] bg-pink-100 font-montserrat pt-[25px] sm:pt-[30px] md:pt-[40px]">
      <div className="flex max-w-[350px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[930px] mx-auto h-full ">
        <div className="flex-1">
          <div className="flex h-full items-center relative ">
            <div className="h-[175px] sm:h-[270px] md:h-[320px] lg:h-[400px] w-[50px] md:w-[70px] bg-red-700 absolute rounded-lg md:rounded-lg left-[25px] md:left-[45px] "></div>
            <img src="./Assets/hp-kemitraan.png" alt="" className="absolute z-10" />
            <div className="h-[130px] sm:h-[170px] md:h-[250px] lg:h-[300px] w-[30px] md:w-[40px] bg-gray-200 rounded-lg sm:rounded-xl absolute right-[27px] sm:right-[40px] md:right-[60px]"></div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col justify-center h-full">
            <p className="tracking-widest text-red-700 font-medium mb-[20px] text-[12px] sm:text-[16px] md:text-xl lg:text-2xl">
              TERINTEGRASI APLIKASI
            </p>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Bergabung menjadi mitra professional CLINK!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HpKemitraan;
