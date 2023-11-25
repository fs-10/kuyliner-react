import React from "react";
import MenuSatu from "../../../assets/menu-section/menu-dua.jpg";
import LogoMenuSatu from "../../../assets/menu-section/logo-menu-satu.jpg";
import GambarDaftarPenjual from "../../../assets/herosection-two/daftar-penjual.jpg";
import { StarIcon } from "@heroicons/react/24/solid";

function CardDetail() {
  return (
    <section className="mb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-end px-1 lg:w-1/2 bg-white-500">
            <div className="relative mt-10 lg:mt-0 lg:right-5 py-6 ">
              <img src={MenuSatu} alt="" className="mx-auto lg:w-screen px-6" />
            </div>
          </div>
          <div className="w-full self-center lg:w-1/2">
            <h2 className="lg:text-start text-center font-bold text-3xl">
              Pizza Margherita
            </h2>
            <div className="flex items-center justify-start py-4">
              <img
                src={LogoMenuSatu}
                alt=""
                className="rounded-full lg:rounded-full"
              />
              <p className="px-4 text-xl font-medium">Mala Kitchen</p>
            </div>
            <div className="mb-5 lg:w-1/2">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p className="text-lg font-medium mb-2 ms-2">Jakarta Timur</p>
              </div>
              <div className="flex justify-between pe-5 py-1">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="ms-2">08.00 - 20.00</p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>

                  <p className="ms-2">Senin - Jum'at</p>
                </div>
              </div>
              <div className="flex justify-between pe-5 py-1">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                  <p className="ms-2">Rp.40.000</p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </svg>
                  <p className="ms-2">+62354323423</p>
                </div>
              </div>
              <div className="flex justify-start pe-5 font-bold text-yellow-500 text-md items-center mt-5">
                <div className="flex">
                  <StarIcon className="h-8 w-8 text-yellow-500" />
                  <StarIcon className="h-8 w-8 text-yellow-500" />
                  <StarIcon className="h-8 w-8 text-yellow-500" />
                  <StarIcon className="h-8 w-8 text-yellow-500" />
                  <StarIcon className="h-8 w-8 text-gray-400" />
                </div>
                <p className="ms-5">4.0/5.0</p>
              </div>
            </div>
            <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-lg hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
              Lihat Menu
            </button>
          </div>
        </div>
      </div>
      <div className="container px-6 mt-10">
        <iframe
          id="gmaps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.973189575778!2d107.8228575!3d-6.9509891999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c561bd466d51%3A0xd2803279a5d5e520!2sPerumahan%20PUTERACO%20INDAH%20Cimanggung!5e0!3m2!1sid!2sid!4v1697029542606!5m2!1sid!2sid"
          height={300}
          className="w-full"
        ></iframe>
      </div>
    </section>
  );
}

export default CardDetail;
