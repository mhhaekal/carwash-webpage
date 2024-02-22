import React from "react";

const HeroKemitraan = () => {
  return (
    <div className="h-[400px] md:h-[700px] bg-red-700">
      <div className="max-w-[350px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[930px] mx-auto">
        {/* <h1 className="text-8xl">Jokowi</h1> */}
        <div className="flex justify-center">
          <h1 className="text-[20px] md:text-[50px] font-semibold font-montserrat text-white w-[200px] md:w-[650px] text-center">
            Daftar Mitra CLINK! GRATIS
          </h1>
        </div>
        <div className="mt-[10px]">
          <img src="./Assets/hero-kemitraan.jpeg" className="w-full" alt="" />
        </div>
        <div className="flex justify-center mt-5 md:mt-7">
          <button
            className="bg-white text-red-700 font-bold d px-4 py-3 rounded-md 
drop-shadow-xl"
          >
            Daftar Kemitraan
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroKemitraan;
