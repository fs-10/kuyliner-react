import React from "react";

function FormEditProfile() {
  return (
    <section>
      <form action="" className="container lg:px-60 py-5 mb-10">
        {/* NAMA */}
        <div className="container w-full border-2 rounded-lg  border-gray-500 py-2 mb-5 ">
          <label htmlFor="" className="font-semibold w-1/3">
            Nama :
          </label>
          <input
            type="text"
            placeholder="Username"
            className="ms-5 py-2 w-2/3 rounded-sm"
          />
        </div>
        <div className="container w-full border-2 rounded-lg  border-gray-500 py-2 mb-5 ">
          <label htmlFor="" className="font-semibold w-1/3">
            Lokasi :
          </label>
          <input
            type="text"
            placeholder="Bandung"
            className="ms-5 py-2 w-2/3 rounded-sm"
          />
        </div>
        <div className="container w-full border-2 rounded-lg  border-gray-500 py-2 mb-5 ">
          <label htmlFor="" className="font-semibold w-1/3">
            Jenis Kelamin :
          </label>
          <input
            type="text"
            placeholder="Laki - Laki"
            className="ms-5 py-2 w-2/3 rounded-sm"
          />
        </div>
        <div className="container w-full border-2 rounded-lg  border-gray-500 py-2 mb-5 ">
          <label htmlFor="" className="font-semibold w-1/3">
            Email :
          </label>
          <input
            type="email"
            placeholder="adawdawdadw@gmail.com"
            className="ms-5 py-2 w-2/3 rounded-sm"
          />
        </div>
        <div>
          <h1 className="font-semibold w-1/3">Tentang Diri</h1>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Tentang Diri Anda"
            className="w-full p-5 border-2 border-gray-400 rounded-lg mt-4"
          ></textarea>
        </div>
        <div>
          <h1 className="py-5">
            Ganti Password | Kosongkan Jika Tidak Ingin Diganti
          </h1>
          <div className="container w-full border-2 rounded-lg border-gray-500 py-2 mb-5 ">
            <label htmlFor="" className="font-semibold w-1/2">
              New Password :
            </label>
            <input
              type="password"
              placeholder=""
              className="ms-5 py-2 w-1/2 rounded-sm"
            />
          </div>
          <div className="container w-full border-2 rounded-lg  border-gray-500 py-2 mb-5 mt-5">
            <label htmlFor="" className="font-semibold w-1/2">
              Confirm Password :
            </label>
            <input
              type="password"
              placeholder=""
              className="ms-5 py-2 w-1/2 rounded-sm"
            />
          </div>
          <button className="text-base font-semibold text-white bg-primary py-3 px-8 mt-3 rounded-lg hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
            Selesai
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormEditProfile;
