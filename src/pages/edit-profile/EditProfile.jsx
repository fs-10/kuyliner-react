import React, { useEffect, useState } from "react";
import UserProfile from "../../assets/logo/user-unsign-logo.svg";
import axios from "axios";
import { NavLink } from "react-router-dom";
// import { Cloudinary } from "@cloudinary/url-gen";

function EditProfile() {
  const [dataUser, setDataUser] = useState([]);
  const [image, setImage] = useState(null);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    location: "",
  });
  const id = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(e.target.value);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      setImage(reader)
    } else {
      setSelectedImage(null);
    }
  };

  // const cloudinary = new Cloudinary({
  //   cloud: {
  //     cloudName: import.meta.env.VITE_CLOUDINARY_NAME,
  //     apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
  //     apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
  //   },
  // });


  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_PUBLIC_API_URL}/user/${id}`,
        {
          firstName: user.firstName,
          lastName: user.lastName,
          location: user.location,
          profile_image: image,
        },
        {
          Headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        await axios
          .get(`${import.meta.env.VITE_PUBLIC_API_URL}/user/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            setUser({
              firstName: data.data.first_name ? data.data.first_name : "",
              lastName: data.data.last_name ? data.data.last_name : "",
              location: data.data.location ? data.data.location : "",
            });
            setDataUser(data.data);
          });
      } catch (error) {
        console.log(`Error ${error}`);
      }
    })();
  }, []);

  return (
    <section>
      <form action="" className="container lg:px-60 py-5 mb-10">
        <section className="flex justify-center flex-col items-center py-10">
          <img
            src={
              image
                ? image
                : dataUser.profile_image
                ? dataUser.profile_image
                : UserProfile
            }
            className="w-56 h-56  rounded-full border border-black border-spacing-9"
          />
          <label
            htmlFor="files"
            className="text-base font-semibold text-white bg-primary py-3 px-8 mt-5 rounded-lg hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out cursor-pointer"
          >
            Select Image
          </label>
          <input
            id="files"
            className="hidden"
            type="file"
            onChange={handleImageChange}
            accept=".png, .jpg, .jpeg"
            formEncType="multipart/form-data"
          />
        </section>
        <div className="container w-full border-2 rounded-lg  border-gray-500 py-2 mb-5 ">
          <label htmlFor="" className="font-semibold w-1/3">
            First Name :
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="ms-5 py-2 w-2/3 rounded-sm px-3"
            name="firstName"
            // value={user.firstName.length != 0 ? user.firstName : dataUser.first_name}
            value={user.firstName}
            onChange={handleInput}
          />
        </div>
        <div className="container w-full border-2 rounded-lg  border-gray-500 py-2 mb-5 ">
          <label htmlFor="" className="font-semibold w-1/3">
            Last Name :
          </label>
          <input
            type="text"
            placeholder="Last Name (Opsional)"
            className="ms-5 py-2 w-2/3 rounded-sm px-3"
            name="lastName"
            value={user.lastName}
            onChange={handleInput}
          />
        </div>
        <div className="container w-full border-2 rounded-lg  border-gray-500 py-2 mb-5 ">
          <label htmlFor="" className="font-semibold w-1/3">
            Lokasi :
          </label>
          <input
            type="text"
            placeholder="Bandung"
            className="ms-5 py-2 w-2/3 rounded-sm px-3"
            name="location"
            value={user.location}
            onChange={handleInput}
          />
        </div>
        <div className="flex gap-3 justify-end">
          <NavLink
            to={"/profile"}
            type="button"
            className="py-2 px-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-28 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            Cancel
          </NavLink>
          <button
            type="button"
            className="py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-indigo-200 text-white w-28 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
        {/* <div className="container w-full border-2 rounded-lg  border-gray-500 py-2 mb-5 ">
          <label htmlFor="" className="font-semibold w-1/3">
            Jenis Kelamin :
          </label>
          <input
            type="text"
            placeholder="Laki - Laki"
            className="ms-5 py-2 w-2/3 rounded-sm px-3"
          />
        </div> */}
        {/* <div className="container w-full border-2 rounded-lg  border-gray-500 py-2 mb-5 ">
          <label htmlFor="" className="font-semibold w-1/3">
            Email :
          </label>
          <input
            type="email"
            placeholder="adawdawdadw@gmail.com"
            className="ms-5 py-2 w-2/3 rounded-sm px-3"
          />
        </div> */}
        {/* <div>
          <h1 className="font-semibold w-1/3">Tentang Diri</h1>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Tentang Diri Anda"
            className="w-full p-5 border-2 border-gray-400 rounded-lg mt-4"
          ></textarea>
        </div> */}
        {/* <div>
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
        </div> */}
      </form>
    </section>
  );
}

export default EditProfile;
