import React from "react";
import LogoMenuSatu from "../../../assets/menu-section/logo-menu-satu.jpg";
import { StarIcon } from "@heroicons/react/24/solid";

function InputReview() {
  return (
    <section className="container">
      <div>
        <div className="flex items-center">
          <img
            src={LogoMenuSatu}
            alt=""
            className="rounded-full lg:rounded-full"
          />
          <h1 className="ms-5 font-bold">Asuma Taki</h1>
        </div>

        <div className="flex mt-4">
          <StarIcon className="h-8 w-8 text-yellow-500" />
          <StarIcon className="h-8 w-8 text-yellow-500" />
          <StarIcon className="h-8 w-8 text-yellow-500" />
          <StarIcon className="h-8 w-8 text-yellow-500" />
          <StarIcon className="h-8 w-8 text-gray-400" />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Tuliskan Ulasanmu"
          className="w-full p-5 border-2 border-gray-400 rounded-lg mt-4"
        ></textarea>
        <button className="text-base font-semibold text-white bg-primary py-2 px-8 my-4 rounded-lg hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
          Kirim
        </button>
      </div>
    </section>
  );
}

export default InputReview;
