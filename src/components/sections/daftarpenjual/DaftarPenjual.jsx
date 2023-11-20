import React from "react";
import GambarDaftarPenjual from "../../../assets/herosection-two/daftar-penjual.jpg";

function DaftarPenjual() {
  return (
    <section className="py-7 mb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary text-xl md:text-xl">
              Ingin menjual produk seperti mereka?
            </h1>
            <h2 className="font-bold text-dark text-5xl mt-1 mb-3">
              Ayo Jadi Partner <span className="text-primary">Kuy</span>Liner
            </h2>
            <p className="font-medium text-dark mb-10 leading-relaxed">
              Dengan menjadi partner, kami akan membantu UMKM anda dengan
              membagikan tempat kuliner anda
            </p>

            <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-lg hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
              Daftar Jadi Partner
            </button>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img
                src={GambarDaftarPenjual}
                alt="daftarpenjual"
                className="max-w-full mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DaftarPenjual;
