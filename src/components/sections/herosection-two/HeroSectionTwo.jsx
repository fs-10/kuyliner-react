import React from "react";
import herosectiontwo from "../../../assets/herosection-two/herosection-two.jpg";

function HeroSectionTwo() {
  return (
    <section className="pt-20">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary text-xl md:text-xl">
              Halo, Selamat Datang
            </h1>
            <h2 className="font-bold text-dark text-5xl mt-1 mb-3">
              Menu Varian Kuliner{" "}
              <span className="block font-bold">Untuk Pecinta Makanan</span>
            </h2>
            <p className="font-medium text-dark mb-10 leading-relaxed">
              {" "}
              Kuyliner memberikan pengalaman rasa yang terbaik bagi anda. Daftar
              sebagai pengguna untuk mencari citra rasa dari hidangan UMKM
              indonesia.
            </p>

            <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-lg hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
              Daftar
            </button>
            <button className="text-base font-semibold text-dark py-3 px-8 mx-5 border-2 border-stone-500 rounded-lg hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
              Masuk
            </button>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img
                src={herosectiontwo}
                alt="herosectiontwo"
                className="max-w-full mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionTwo;
