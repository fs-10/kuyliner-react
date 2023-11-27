import React from "react";
import UserProfile from "../../../assets/profile/profile-user.jpg";

function ProfilePicture() {
  return (
    <section className="flex justify-center flex-col items-center py-10">
      <img src={UserProfile} alt="" className="w-60 rounded-full" />
      <button className="text-base font-semibold text-white bg-primary py-3 px-8 mt-5 rounded-lg hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
        Ganti Foto
      </button>
    </section>
  );
}

export default ProfilePicture;
