import React from "react";
import LogoMenuSatu from "../../../assets/menu-section/logo-menu-satu.jpg";
import { StarIcon } from "@heroicons/react/24/solid";
import MenuSatu from "../../../assets/menu-section/menu-dua.jpg";

function ReviewUser() {
  return (
    <section className="container mt-10">
      <h1 className="text-lg font-semibold">All Reviews From Resort</h1>
      <div className="p-5 mb-10 mt-5 border-2 border-gray-300 rounded-lg lg:flex">
        <div className="lg:w-3/4 pe-10">
          <div className="flex items-center mt-3">
            <img src={LogoMenuSatu} alt="" className="w-9 rounded-full" />
            <h1 className="text-sm ms-3">Mala Ktichen</h1>
            <h1 className="text-sm ms-3">| Jakarta Timur</h1>
          </div>
          <h1 className="text-sm mt-2">11/09/2023</h1>
          <div className="flex items-center">
            <div className="flex mt-2">
              <StarIcon className="h-7 w-7 text-yellow-500" />
              <StarIcon className="h-7 w-7 text-yellow-500" />
              <StarIcon className="h-7 w-7 text-yellow-500" />
              <StarIcon className="h-7 w-7 text-yellow-500" />
              <StarIcon className="h-7 w-7 text-gray-400" />
            </div>
            <h1 className="text-sm mt-2 ms-3 text-yellow-500">4/5</h1>
          </div>
          <h1 className="text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            commodi minus blanditiis, quaerat eligendi saepe impedit maxime
            perferendis perspiciatis earum?
          </h1>
        </div>
        <div className="lg:flex lg:w-1/4 relative mt-5 lg:mt-0 lg:right-5">
          <img src={MenuSatu} alt="" className="mx-auto lg:w-96 px-6" />
        </div>
      </div>
      {/* REVIEW 2 */}
      <div className="p-5 mb-10 mt-5 border-2 border-gray-300 rounded-lg lg:flex">
        <div className="lg:w-3/4 pe-10">
          <div className="flex items-center mt-3">
            <img src={LogoMenuSatu} alt="" className="w-9 rounded-full" />
            <h1 className="text-sm ms-3">Mala Ktichen</h1>
            <h1 className="text-sm ms-3">| Jakarta Timur</h1>
          </div>
          <h1 className="text-sm mt-2">11/09/2023</h1>
          <div className="flex items-center">
            <div className="flex mt-2">
              <StarIcon className="h-7 w-7 text-yellow-500" />
              <StarIcon className="h-7 w-7 text-yellow-500" />
              <StarIcon className="h-7 w-7 text-yellow-500" />
              <StarIcon className="h-7 w-7 text-yellow-500" />
              <StarIcon className="h-7 w-7 text-gray-400" />
            </div>
            <h1 className="text-sm mt-2 ms-3 text-yellow-500">4/5</h1>
          </div>
          <h1 className="text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            commodi minus blanditiis, quaerat eligendi saepe impedit maxime
            perferendis perspiciatis earum?
          </h1>
        </div>
        <div className="lg:flex lg:w-1/4 relative mt-5 lg:mt-0 lg:right-5">
          <img src={MenuSatu} alt="" className="mx-auto lg:w-96 px-6" />
        </div>
      </div>
      {/* REVIEW 3 */}
      <div className="p-5 mb-10 mt-5 border-2 border-gray-300 rounded-lg lg:flex">
        <div className="lg:w-3/4 pe-10">
          <div className="flex items-center mt-3">
            <img src={LogoMenuSatu} alt="" className="w-9 rounded-full" />
            <h1 className="text-sm ms-3">Mala Ktichen</h1>
            <h1 className="text-sm ms-3">| Jakarta Timur</h1>
          </div>
          <h1 className="text-sm mt-2">11/09/2023</h1>
          <div className="flex items-center">
            <div className="flex mt-2">
              <StarIcon className="h-7 w-7 text-yellow-500" />
              <StarIcon className="h-7 w-7 text-yellow-500" />
              <StarIcon className="h-7 w-7 text-yellow-500" />
              <StarIcon className="h-7 w-7 text-yellow-500" />
              <StarIcon className="h-7 w-7 text-gray-400" />
            </div>
            <h1 className="text-sm mt-2 ms-3 text-yellow-500">4/5</h1>
          </div>
          <h1 className="text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            commodi minus blanditiis, quaerat eligendi saepe impedit maxime
            perferendis perspiciatis earum?
          </h1>
        </div>
        <div className="lg:flex lg:w-1/4 relative mt-5 lg:mt-0 lg:right-5">
          <img src={MenuSatu} alt="" className="mx-auto lg:w-96 px-6" />
        </div>
      </div>
    </section>
  );
}

export default ReviewUser;
