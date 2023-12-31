import React, { useEffect, useState } from "react";
import UserConsumer from "../../../assets/logo/user-unsign-logo.svg";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { NavLink } from "react-router-dom";

function DetailProfile() {
  const [user, setUser] = useState([]);

  const id = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    (async () => {
      await axios
        .get(`${import.meta.env.VITE_PUBLIC_API_URL}/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setUser(data.data));
    })();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("userId");
    localStorage.removeItem("token");
  };

  return (
    <section className="container py-10">
      <div className=" flex justify-center flex-col items-center">
        <img
          src={
            user.profile_image != undefined
              ? user.profile_image.length != 0
                ? user.profile_image.length
                : UserConsumer
              : "Error on Code"
          }
          alt=""
          className="w-60 rounded-full border border-black"
        />
        <h1 className="text-3xl font-bold mt-5">
          {user && user.first_name} {user && user.last_name}
        </h1>
        <div className="flex items-center">
          <div className="flex py-3">
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
            <h1 className="ms-1">
              {user && user.location ? user.location : "none"}
            </h1>
          </div>
          <div className="flex ms-5">
            <EnvelopeIcon className="h-6 w-6" />
            <h1 className="ms-1">{user && user.email}</h1>
          </div>
        </div>

        {/* <p className="text-md text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, odit!
          Lorem ipsum dolor sit amet.
        </p> */}
        <div className="flex gap-5">
          <NavLink
            to={`/edit/${id}`}
            className="text-base font-semibold text-white bg-primary py-3 px-8 mt-5 rounded-lg hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
          >
            Edit Profile
          </NavLink>
          <NavLink
            to="/login"
            className="text-base font-semibold text-white bg-red-600 py-3 px-8 mt-5 rounded-lg hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
          >
            Log Out
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default DetailProfile;
